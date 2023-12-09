"use client";

import NavBar from "../../components/UI/NavBar";

import "./../globals.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="scroll-smooth " id="intro">
        <div className="hero flex-row relative flex items-center justify-center h-screen overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-screen">
            <h1 className="text-white">Hello world</h1>
          </div>
        </div>
      </section>
    </>
  );
}
