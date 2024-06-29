import Image from "next/image";
import Nav from "./landing/navbar/navbar";
import Hero from "./landing/hero/hero";
import Featured from "./landing/featured/featured";
import About from "./landing/about/about";
import Footer from "./landing/footer/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Featured />
      <About />
      <Footer />
    </>
  );
}
