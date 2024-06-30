import { FlipWords } from "../components/ui/flip-words";

const words = [
  "Computer Vision",
  "Natural Language",
  "Multi-Modal",
  "Tabular Data",
];

export default function ModelsPageHeader() {
  return (
    <section className="flex flex-col justify-center items-center w-screen h-small bg-black-gradient">
      <h1 className="pt-16 font-semibold text-5xl tracking-tighter text-center leading-none dark:text-white">
        Explore Models For <br />
        <FlipWords className="text-teal" words={words} />
      </h1>
      <h6 className="pt-4 w-1/2 text-blue-gray text-lg text-center font-extralight leading-snug">
        Neural Network Based AI Models that have been either created from
        scratch or fine-tuned
      </h6>
    </section>
  );
}
