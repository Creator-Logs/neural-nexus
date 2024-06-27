import Nav from "../navbar/navbar";
import "./hero.scss";
import Image from "next/image";
import Instagram from "../../assets/Instagram.svg";
import LinkedIn from "../../assets/LinkedIn.svg";
import GitHub from "../../assets/GitHub.svg";
import Kaggle from "../../assets/Kaggle.svg";
import Scroll from "../../assets/Scroll.svg";

export default function Hero() {
  return (
    <>
      <section className="flex w-screen h-screen bg-black-gradient items-center justify-center">
        <div className="absolute -right-20 top-1/4 dark:bg-purple rounded-full border w-48 h-64 opacity-75 bg-blur"></div>
        <div className="flex flex-col justify-center items-center">
          <h5 className="bg-clip-text text-transparent bg-gradient-to-r from-teal to-blue text-xl text-center tracking-tighter inline-block">
            Welcome to Neural Nexus
          </h5>
          <h1 className="text-white text-5xl text-center tracking-tighter leading-none font-semibold">
            A Repository Of Deep Learning Models
          </h1>
          <h6 className="pt-10 text-blue-gray text-lg text-center font-extralight leading-none">
            By Ansh Gupta
          </h6>
          <div className="pt-20 flex flex-col items-center justify-center hover:brightness-150">
            <Image
              src={Scroll}
              width={20}
              height={20}
              alt="Scroll"
              className="flex-shrink-0"
            />
            <p className="text-gray font-extralight">Scroll</p>
          </div>
        </div>
        <div className="absolute flex items-center justify-center flex-col top-2/3 left-10 space-y-4">
          <a>
            <Image
              src={Instagram}
              width={27}
              height={27}
              alt="Instagram"
              className="flex-shrink-0 hover:brightness-150"
            />
          </a>
          <a>
            <Image
              src={LinkedIn}
              width={27}
              height={27}
              alt="LinkedIn"
              className="flex-shrink-0 hover:brightness-150"
            />
          </a>
          <a>
            <Image
              src={Kaggle}
              width={27}
              height={27}
              alt="Kaggle"
              className="flex-shrink-0 hover:brightness-150"
            />
          </a>
          <a>
            <Image
              src={GitHub}
              width={27}
              height={27}
              alt="GitHub"
              className="flex-shrink-0 hover:brightness-150"
            />
          </a>
        </div>
      </section>
    </>
  );
}
