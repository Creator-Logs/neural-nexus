import Image from "next/image";
import Nav from "./landing/navbar/navbar";
import Hero from "./landing/hero/hero";
import Featured from "./landing/featured/featured";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Featured />
    </>
  );
}
