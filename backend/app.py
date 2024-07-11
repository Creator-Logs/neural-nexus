from fastapi import FastAPI, HTTPException
from model_handlers import llm_model_handler
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

class InputData(BaseModel):
    text: str

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "https://theneuralnexus.vercel.app/",
    "https://theneuralnexus.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST", "GET", "PUT"],
    allow_headers=["*"],
)

def startup_event():
    llm_model_handler.reassemble_model()

app.add_event_handler("startup", startup_event)

@app.get("/")
async def index():
    return {"message": "hello"}
    
@app.post("/ai-text-predict/")
async def predict(input_data: InputData):
    text = input_data.text
    try:
        preds = llm_model_handler.predict(text)
        return preds
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

