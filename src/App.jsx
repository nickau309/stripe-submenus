import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-100 text-slate-800">
      <div className="absolute inset-x-0 top-0 h-2/3 bg-[url('./images/hero.svg')] bg-cover bg-no-repeat md:h-full md:bg-contain"></div>
      <Navbar />
      <Hero />
    </div>
  );
}
