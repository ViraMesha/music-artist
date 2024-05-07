"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { logoImg } from "@/utils";

export const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setActive(window.scrollY > 100);
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 w-full ${
        active ? "bg-[#030315] py-6" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        {/* logo */}
        <Link
          href={"#"}
          className="relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0"
        >
          <Image src={logoImg} alt="logo" fill className="object-contain" />
        </Link>
        {/* nav */}
        <nav>nav</nav>
        {/* nav mobile */}
        <nav>nav mobile</nav>
        {/* menu btn */}
        <div>menu btn</div>
        {/* socials */}
        <div>social icons</div>
      </div>
    </header>
  );
};
