import torch
import torch.nn as nn
from transformers import RobertaTokenizer
import re


MAX_LEN = 512

model = torch.load('models/DistilRoBERTa-LLMClassification.pth')
tokenizer = RobertaTokenizer.from_pretrained('roberta-base')

def clean_text(text, stem=True):
    text = re.sub(r'[^A-Za-z\s]', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    text = text.lower()
    return text

def tokenize_and_pad(sentence, tokenizer, max_length):
    encoded = tokenizer.encode_plus(
        sentence,
        add_special_tokens=True,
        max_length=max_length,
        padding='max_length',
        truncation=True,
        return_tensors='np'
    )
    return {"input_ids": encoded['input_ids'].squeeze(),
           "attention_mask": encoded["attention_mask"].squeeze()}

def preprocess(text):
    text = clean_text(text)
    text = tokenize_and_pad(text, tokenizer, MAX_LEN)
    text_tensor = torch.tensor(text["input_ids"], dtype=torch.int32)
    text_attention = torch.tensor(text["attention_mask"], dtype=torch.int32)
    return {"input_ids": text_tensor, "attention_mask": text_attention}

def predict(text):
    with torch.no_grad():
        classes=['Student', 'Large-Language Model']
        data = preprocess(text)
        x = data['input_ids'].unsqueeze(0)
        attention = data['attention_mask'].unsqueeze(0)
        pred = model(x, attention_mask = attention)
        confidence = nn.Sigmoid()(pred.logits)
        predicted_class = (confidence >= 0.5).long()
        confidence = (confidence.item()*100)
        predicted_class = classes[predicted_class.item()]
        return({"prediction": (predicted_class), "confidence": round(confidence, 2)})
    
