"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/app/components/ui/lamp";

export default function Featured() {
  return (
    <>
      <section className="relative w-screen h-screen dark:bg-black">
        <div className="flex flex-col items-center pt-32">
          <h3 className=" z-100 bg-clip-text text-transparent bg-gradient-to-t from-white to-gray text-3xl text-center tracking-tight font-semibold inline-block">
            Featured Models
          </h3>
          <LampContainer className="pt-28 absolute top-1/4" />
          <div className="flex"></div>
        </div>
      </section>
    </>
  );
}
