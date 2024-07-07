"use client";
import Image from "next/image";
import { models } from "./model_data";
import Arrow from "../assets/Icons/Arrow.svg";
import Link from "next/link";

import { useState } from "react";

export default function ModelsGallery() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="flex flex-col items-center bg-black w-screen min-h-screen p-20">
      {/* Tabs */}
      <div className="flex space-x-8 mb-16 cursor-pointer">
        <div
          className={`${
            activeTab === "All" ? "bg-gray" : "bg-transparent"
          } px-8 py-3 rounded-xl border border-blue-gray/[0.5] transition-all`}
          onClick={() => {
            setActiveTab("All");
          }}
        >
          <h6 className="text-white font-lg">All</h6>
        </div>
        <div className="flex border rounded-xl border-blue-gray/[0.5] cursor-pointer">
          {categories.map((item) => (
            <div
              key={item.id}
              className={`${
                activeTab === item.value ? "bg-gray" : "bg-transparent"
              } px-8 py-3 rounded-lg transition-all`}
              onClick={() => {
                setActiveTab(item.value);
              }}
            >
              <h6 className="text-white font-lg">{item.title}</h6>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-3 grid-rows-auto gap-8">
        {models
          .filter((item) => activeTab === "All" || activeTab === item.value)
          .map((item) => (
            <div key={item.id} className="relative h-100 w-96 transition-all ">
              <Image
                src={item.img}
                alt="background image"
                className="z-10 absolute rounded-lg w-full object-cover h-full overflow-clip"
              />
              <div className="h-full flex flex-col justify-between relative z-20 p-4">
                <div>
                  <h6
                    className={`${
                      item.isDark ? "text-blue-gray" : "text-white"
                    } text-base font-medium tracking-tight leading-tight pb-2`}
                  >
                    {item.title}
                  </h6>
                  <h5
                    className={`${
                      item.isDark ? "text-white" : "text-black"
                    } text-xl font-medium tracking-tight leading-tight`}
                  >
                    {item.description}
                  </h5>
                  <div className="mt-3">
                    <p className="text-white/[0.8] font-extralight py-1.5 px-3.5 rounded-full bg-black/[0.4] backdrop-blur-sm w-max">
                      {item.value}
                    </p>
                  </div>
                </div>
                <Link
                  href={item.url}
                  className="flex justify-center align-center h-20 w-20 rounded-full border border-white/[0.3] dark:bg-black/[0.6] backdrop-blur-sm m-2 hover:rotate-45 transition-all"
                >
                  <Image src={Arrow} alt="Arrow" height={26} width={26} />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

const categories = [
  {
    id: 1,
    title: "Computer Vision",
    value: "Computer Vision",
  },
  {
    id: 2,
    title: "Natural Language",
    value: "Natural Language",
  },
  {
    id: 3,
    title: "Multi-Modal",
    value: "Multi-Modal",
  },
  {
    id: 4,
    title: "Tabular",
    value: "Tabular",
  },
];
