"use client";

import Image from "next/image";
import "../../app/globals.css";
import { useState, useEffect } from "react";
import LoginCard from "./LoginCard";
import Link from "next/link";
import { useAccount } from "wagmi";

export default function NavBar() {
  const [scrollY, setScrollY] = useState(0);
  const { isConnected } = useAccount();

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
        <div className="flex flex-row">
          <Link href={"/"} className="mr-5">
            <Image
              src="/toon3.png"
              alt="title"
              height="150"
              width="150"
            ></Image>
          </Link>
          {isConnected ? (
            <Link
              href={"/dashboard"}
              className="mt-4 font-semibold text-black text-xl  hover:text-slate mr-4"
            >
              <div>Dashboard</div>
            </Link>
          ) : null}
          <Link
            href={"/explore"}
            className="mt-4 font-semibold text-black text-xl  hover:text-slate ml-4"
          >
            Explore
          </Link>
        </div>
        <div className="flex gap-4 items-center font-semibold text-black text-xl ">
          <LoginCard />
        </div>
      </header>
    </>
  );
}
