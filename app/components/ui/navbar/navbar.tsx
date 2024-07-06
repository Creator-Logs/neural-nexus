"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/app/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import logo from "../../../assets/Icons/Logo.svg";
import Image from "next/image";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-sm mx-auto highest",
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
            <MenuItem
              page="/"
              setActive={setActive}
              active={active}
              item="Home"
            >
              <div className="flex flex-col space-y-2 text-sm">
                <HoveredLink href="/#featured-models">
                  Latest Models
                </HoveredLink>
                <HoveredLink href="/#about">About</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem
              page="/models"
              setActive={setActive}
              active={active}
              item="Models"
            ></MenuItem>
          </div>
          <a
            href="/contact"
            className="px-8 py-2 rounded-lg bg-white text-black hover:opacity-[0.8] text-base transition duration-200"
          >
            Contact
          </a>
        </Menu>
      </div>
    </>
  );
}
