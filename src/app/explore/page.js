"use client";

import NavBar from "../../components/UI/NavBar";

import "./../globals.css";
import SecondaryNav from "@/components/UI/SecondaryNav";
export default function Home() {
  return (
    <>
      <NavBar />
      <SecondaryNav />
      <div
        className="absolute "
        style={{ top: "110px", marginTop: "10px" }}
      ></div>
    </>
  );
}
