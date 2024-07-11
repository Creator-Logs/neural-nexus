import Image from "next/image";
import Navbar from "./components/ui/navbar/navbar";
import Hero from "./landing/hero/hero";
import Featured from "./landing/featured/featured";
import About from "./landing/about/about";
import Footer from "./components/ui/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <About />
      <Footer />
    </>
  );
}
