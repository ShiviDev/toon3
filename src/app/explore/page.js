"use client";

import NavBar from "../../components/UI/NavBar";

import "./../globals.css";
import SecondaryNav from "@/components/UI/SecondaryNav";
export default function Home() {
  return (
    <>
      <NavBar />
      <SecondaryNav />
      <div className="absolute " style={{ top: "100px", marginTop: "10px" }}>
        <h1 className="text-white">Hello world</h1>
      </div>
    </>
  );
}
