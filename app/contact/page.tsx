"use client";
import Footer from "../components/ui/footer/footer";
import Navbar from "../components/ui/navbar/navbar";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../../utils/cn";
import { Textarea } from "../components/ui/textarea";
import Link from "next/link";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
      <Navbar />
      <section className="flex justify-between w-screen h-auto bg-black pt-52 px-64">
        <div>
          <h4 className="text-2xl text-white font-semibold tracking-tighter">
            Get In Touch
          </h4>
          <ul>
            {pointers.map((index) => (
              <li className="flex items-center space-x-2 py-2.5" key={index.id}>
                <div className="flex justify-center items-center rounded-full w-6 h-6 border border-blue-gray">
                  <p className="text-xs text-blue-gray leading-none">
                    {index.id}
                  </p>
                </div>
                <p className="text-blue-gray leading-none">{index.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="w-100 border border-dark-gray mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-lg text-neutral-800 dark:text-neutral-200">
              Leave a Message
            </h2>

            <form className="my-8" onSubmit={handleSubmit}>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your name" type="name" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-8">
                <Label htmlFor="message">Message</Label>
                <Textarea placeholder="Enter your message"></Textarea>
              </LabelInputContainer>
              <div className="flex items-center">
                <p className="text-white font-extralight text-sm w-full">
                  You can also DM me on{" "}
                  <Link
                    className="underline underline-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/creatorlogs/"
                  >
                    Instagram
                  </Link>
                </p>
                <button
                  className="hover:opacity-[0.8] relative group/btn bg-dark-gray block dark:bg-dark-gray w-56 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

const pointers = [
  { id: 1, text: "Ask Queries" },
  { id: 2, text: "Talk about potential partnerships" },
  { id: 3, text: "Anything else you want to say" },
];

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

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
