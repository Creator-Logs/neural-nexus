import logo from "../../../assets/Icons/Logo-Black.svg";
import Image from "next/image";
import Instagram from "../../../assets/Icons/Instagram.svg";
import LinkedIn from "../../../assets/Icons/LinkedIn.svg";
import GitHub from "../../../assets/Icons/GitHub.svg";
import Kaggle from "../../../assets/Icons/Kaggle.svg";

export default function Footer() {
  return (
    <section className="relative z-50 dark:bg-white w-screen h-80">
      <div className="flex px-32 pt-12 justify-between">
        <div className="flex">
          <Image
            src={logo}
            width={150}
            height={150}
            alt="logo"
            className="flex-shrink-0"
          />
          <div>
            <h1 className="leading-none text-5xl tracking-tighter font-semibold">
              Neural Nexus
            </h1>
            <h6 className="pl-2 text-lg font-medium tracking-tight text-blue-gray">
              Repository of Deep Learning Models by Ansh Gupta{" "}
            </h6>
          </div>
        </div>
        <div className="pt-8 flex space-x-16">
          <ul className="flex flex-col space-y-4">
            {links.map((item) => (
              <li key={item.id} className="tracking-tight font-medium">
                {item.title}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col space-y-4">
            {socials.map((item) => (
              <li
                key={item.id}
                className="flex space-x-2 hover:brightness-150 items-center"
              >
                <Image
                  src={item.icon}
                  width={20}
                  height={20}
                  alt="Icon"
                  className="flex-shrink-0"
                />
                <p className="tracking-tight font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const socials = [
  {
    id: 1,
    title: "Instagram",
    icon: Instagram,
    url: "/",
  },
  {
    id: 2,
    title: "LinkedIn",
    icon: LinkedIn,
    url: "/",
  },
  {
    id: 3,
    title: "GitHub",
    icon: GitHub,
    url: "/",
  },
  {
    id: 4,
    title: "Kaggle",
    icon: Kaggle,
    url: "/",
  },
];

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Models",
    url: "/",
  },
  {
    id: 3,
    title: "Contact",
    url: "/",
  },
];
