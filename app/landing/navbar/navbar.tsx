"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/app/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import logo from "../../assets/Logo.svg";
import Image from "next/image";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-sm mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Image
            src={logo}
            width={34}
            height={34}
            alt="logo"
            className="flex-shrink-0 rounded-md shadow-2xl pl-2"
          />
          <div className="flex justify-center space-x-6">
            <MenuItem setActive={setActive} active={active} item="Home">
              <div className="flex flex-col space-y-2 text-sm">
                <HoveredLink href="/web-dev">Latest Models</HoveredLink>
                <HoveredLink href="/interface-design">About</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Models">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
          </div>
          <button className="px-8 py-2 rounded-lg border border-black bg-white text-black hover:opacity-[0.8] text-base transition duration-200">
            Contact
          </button>
        </Menu>
      </div>
    </>
  );
}
