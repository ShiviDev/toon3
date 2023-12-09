"use client";

import Image from "next/image";
import "../../app/globals.css";
import { useState, useEffect } from "react";
import LoginCard from "./LoginCard";

export default function NavBar() {
  const [scrollY, setScrollY] = useState(0);

  function handleScroll() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", handleScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <header
        className={`w-full fixed bg-yellow-200 flex justify-between ${
          scrollY > 60
            ? "bg-black transition duration-300 ease-in-out text-ivory"
            : "transition  text-pastelBlack duration-300 ease-in-out"
        } items-center px-4 md:px-12 h-24 z-40`}
      >
        <a>
          <Image src="/toon3.png" alt="title" height="150" width="150"></Image>
        </a>
        <div className="flex mr-10 items-center font-bold text-black text-xl ">
          <a href="#" className="mr-6  hover:text-slate">
            About
          </a>
          <LoginCard />
        </div>
      </header>
    </>
  );
}
