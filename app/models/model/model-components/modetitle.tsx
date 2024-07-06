"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image, { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const ModelTitle = ({
  children,
  className,
  modelTitle,
  modelSubtitle,
  modelImage,
  modelCategory,
}: {
  children?: React.ReactNode;
  className?: string;
  modelTitle?: string;
  modelSubtitle?: string;
  modelImage: StaticImageData;
  modelCategory?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center relative w-screen h-screen",
        className
      )}
    >
      <Image
        src={modelImage}
        alt="background image"
        className="w-full absolute h-full object-fit overflow-clip"
      />
      <h1 className="z-10 text-5xl text-white text-center tracking-tighter leading-none font-semibold">
        {modelTitle}
      </h1>
      <h6 className="z-10 text-lg text-white text-center tracking-tight font-regular pt-4">
        {modelSubtitle}
      </h6>
      <div className="mt-4">
        <p className="text-white/[0.8] font-extralight py-2 px-4 rounded-full bg-black/[0.4] backdrop-blur-sm w-max">
          {modelCategory}
        </p>
      </div>
    </div>
  );
};
