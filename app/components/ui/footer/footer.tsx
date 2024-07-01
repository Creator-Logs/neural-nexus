import logo from "../../../assets/Icons/Logo-Gray.svg";
import Image from "next/image";
import FooterCredit from "../../../assets/Icons/FooterCredit.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <section className=" relative z-50 bg-dark-gray-gradient w-screen h-small">
      <div className="flex flex-col justify-end h-full pb-8">
        <div className="flex px-32 pb-12 justify-between items-center">
          <div>
            <h3 className="mb-8 text-3xl leading-none tracking-tighter font-medium text-white">
              Reach Out to Me
            </h3>
            <a
              href="/contact"
              className="px-8 py-2 rounded-xl bg-blue-gray text-lg text-black hover:opacity-[0.8] text-base transition duration-200"
            >
              Contact
            </a>
          </div>
          <div>
            <p className="text-gray text-regular pb-3 font-light">PAGES</p>
            <ul className="grid grid-cols-2 grid-rows-2 gap-y-0.5 gap-x-12">
              {links.map((item) => (
                <li key={item.id} className="cursor-pointer">
                  <a
                    href={item.url}
                    className="hover:text-white/[0.8] text-white font-light tracking-tight"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-gray text-regular pb-4 font-light">SOCIALS</p>
            <ul className="grid grid-cols-2 grid-rows-2 gap-y-0.5 gap-x-12">
              {socials.map((item) => (
                <li key={item.id} className="flex items-center cursor-pointer">
                  <a
                    href={item.url}
                    className="hover:text-white/[0.8] text-white font-light tracking-tight"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-end mx-28 border-t border-blue-gray pt-10">
          <div className="flex justify-center">
            <Image
              src={logo}
              width={110}
              height={110}
              alt="logo"
              className="flex-shrink-0"
            />
            <div>
              <h1 className="pl-2 leading-none text-blue-gray text-5xl tracking-tighter font-semibold">
                Neural Nexus
              </h1>
            </div>
          </div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.xenithstudio.com"
          >
            <Image
              className="flex-shrink-0 pb-4"
              alt="creation credit"
              src={FooterCredit}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

const socials = [
  {
    id: 1,
    title: "Instagram",
    url: "https://www.instagram.com/creatorlogs/",
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/ansh-gupta-542613255/",
  },
  {
    id: 3,
    title: "GitHub",
    url: "https://github.com/Creator-Logs",
  },
  {
    id: 4,
    title: "Kaggle",
    url: "https://www.kaggle.com/anshkami",
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
    url: "/models",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },
];
