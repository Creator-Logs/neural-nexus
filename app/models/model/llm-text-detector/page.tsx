"use client";
import Footer from "@/app/components/ui/footer/footer";
import Navbar from "@/app/components/ui/navbar/navbar";
import { ModelTitle } from "../model-components/modetitle";
import LLMImage from "../../../assets/ModelBg/LLM-Text-Classification-Large.png";
import { Label } from "../../../components/ui/label";
import { cn } from "@/utils/cn";
import { Textarea } from "../../../components/ui/textarea";
import { useState, ChangeEvent, ClipboardEvent } from "react";
import React from "react";
import { Progress } from "@/app/components/ui/progress";
import Link from "../../../assets/Icons/Link.svg";
import Image from "next/image";

export default function Model() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const [text, setText] = useState<string>(""); // State variable with string type
  const maxWords: number = 1000; // Maximum word limit
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const newText: string = event.target.value;
    // Split text by spaces to count words
    const words: string[] = newText.trim().split(/\s+/);
    if (words.length <= maxWords) {
      setText(newText);
    } else {
      // Truncate text if word limit exceeded
      setText(words.slice(0, maxWords).join(" "));
    }
  };
  const handlePaste = (event: ClipboardEvent<HTMLTextAreaElement>): void => {
    event.preventDefault();
    const pasteText: string = event.clipboardData.getData("text");
    // Combine current text and pasted text
    const newText: string = text + pasteText;
    // Split combined text by spaces to count words
    const words: string[] = newText.trim().split(/\s+/).slice(0, maxWords);
    setText(words.join(" "));
  };
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    // Prevent space, enter, and tab key presses if word limit is reached
    const words: string[] = text.trim().split(/\s+/);
    if (words.length >= maxWords) {
      if (event.key === " " || event.key === "Enter" || event.key === "Tab") {
        event.preventDefault();
      }
    }
  };
  const currentWordCount: number =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <Navbar />
      <ModelTitle
        modelImage={LLMImage}
        modelSubtitle="Was the essay written by an LLM or Human?"
        modelTitle="LLM Generated Text Detection"
        modelCategory="Natural Language"
      />
      <section className="w-screen h-auto bg-black">
        <div className="px-32 pt-36">
          <h3 className="text-white text-3xl tracking-tight leading-none font-medium">
            Is the text generated by an LLM?
          </h3>
          <h6 className="text-white font-regular pt-3">
            Paste your content below, and we’ll tell you likely it is that it
            has been generated by an LLM
          </h6>
        </div>
        <div className="flex pt-24 pb-48 px-32">
          <div className="w-2/3 border rounded-xl border-dark-gray rounded-none px-6 mr-16 shadow-input bg-white dark:bg-black">
            <form className="my-4 w-full" onSubmit={handleSubmit}>
              <LabelInputContainer className="mb-8">
                <Label className="py-2.5" htmlFor="essay">
                  Check for AI generated Text
                </Label>
                <Textarea
                  onChange={handleChange}
                  onPaste={handlePaste}
                  onKeyDown={handleKeyDown}
                  className="h-80"
                  placeholder="Enter your message"
                  value={text}
                ></Textarea>
              </LabelInputContainer>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white font-regular">Word Count</p>
                  <p className="text-gray font-light">
                    {currentWordCount}/{maxWords} words
                  </p>
                </div>
                <button
                  className="hover:opacity-[0.8] relative group/btn bg-dark-gray block dark:bg-dark-gray w-56 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="w-1/3">
            <h5 className="text-xl text-white tracking-tight font-semibold">
              Results
            </h5>

            {Preds.map((item) => (
              <div key={item.id} className="h-16 py-8">
                <div className="flex justify-between items-center">
                  <h6 className="text-blue-gray pb-2">{item.class}</h6>
                  <p className="text-blue-gray font-light">
                    {item.prediction}%
                  </p>
                </div>
                <Progress value={item.prediction} className="w-[100%]" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-screen h-auto bg-white">
        <div className="px-20 py-32">
          <h3 className="text-3xl tracking-tighter font-semibold leading-none">
            How The Model Works
          </h3>

          <div className="flex pt-16">
            <div className="w-1/2 flex flex-col gap-8">
              {Content.map((item) => (
                <div key={item.id}>
                  <h6 className="text-lg tracking-tighter font-medium pb-1.5">
                    {item.heading}
                  </h6>
                  <p className="text-regular font-light">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="ml-12 w-1/2 flex flex-col gap-4">
              <div className="rounded-lg bg-light-blue-gray h-2/3"></div>
              <div className="flex h-1/3 gap-4">
                <div className="flex flex-col justify-center items-center rounded-lg w-1/2 bg-light-blue-gray">
                  <h3 className="leading-none bg-clip-text text-transparent bg-gradient-to-b from-teal to-blue text-3xl text-center tracking-tighter font-medium">
                    94.5%
                  </h3>
                  <h6 className="text-dark-blue-gray">Test Accuracy</h6>
                </div>
                <div className="flex flex-col justify-center items-center rounded-lg w-1/2 bg-light-blue-gray">
                  <h3 className="leading-none bg-clip-text text-transparent bg-gradient-to-b from-teal to-blue text-3xl text-center tracking-tighter font-medium">
                    94.5%
                  </h3>
                  <h6 className="text-dark-blue-gray">Test F1-Score</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const Preds = [
  { id: 1, class: "Large-Language Model", prediction: 0 },
  { id: 2, class: "Student", prediction: 0 },
];

const Content = [
  {
    id: 1,
    heading: "Training Data",
    body: (
      <>
        The model was trained on approximately 1.2 million essays equally
        divided into 2 categories: AI written and Student written. The data was
        tokenised with a character level tokeniser of vocabulary size 30000. You
        can visit the{" "}
        <a
          className="font-medium hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.kaggle.com/code/creatorlogs/lstm-llm-text-detector-99-9-accuracy"
        >
          Kaggle notebook
        </a>{" "}
        or the{" "}
        <a
          className="font-medium hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/creator-logs/"
        >
          GitHub repository
        </a>{" "}
        to see the exact datasets used for training.
      </>
    ),
  },
  {
    id: 2,
    heading: "Model architecture",
    body: "The architecture uses an LSTM layer for classification. \
    The LSTM is a recurrent neural network that takes 1000 tokens and \
    then processes them. The recurrent neural network produces 1000 outputs \
    and the last layer is used for classification via a linear layer and sigmoid \
    activation. To prevent overfitting, there were dropouts of 0.3 placed in both the LSTM \
    layers and after it.",
  },
  {
    id: 3,
    heading: "Metrics",
    body: "In order to evaluate the model, I used a test set which was 10% of the entire dataset.\
     The metrics used for evaluation were the accuracy and f1-score. The accuracy gives us an \
     overview of the model's performance but, the f1-score takes into consideration the \
     performance of the model on both classes.",
  },
];
