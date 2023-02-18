import React from "react";
import phoneImg from "./images/phone.svg";

export default function Hero() {
  return (
    <main className="z-10 flex flex-auto items-center justify-center">
      <div className="w-11/12 max-w-6xl md:grid md:grid-cols-3 md:items-center">
        <article className="md:col-span-2">
          <h1 className="mb-8 max-w-lg text-4xl font-bold tracking-wide sm:text-5xl xl:max-w-xl xl:text-7xl">
            Payments infrastructure for the internet
          </h1>
          <p className="mb-5 max-w-2xl text-sm !leading-relaxed text-slate-500 sm:text-base md:text-lg lg:text-xl">
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="rounded-full bg-black py-1.5 px-4 text-white outline-0 ring-blue-400 ring-offset-2 ring-offset-white duration-200 ease-linear hover:bg-slate-500 focus:ring-2">
            Start now
          </button>
        </article>
        <article className="hidden md:block md:justify-self-center">
          <img
            src={phoneImg}
            alt="phone"
            className="select-none md:w-48 lg:w-56 xl:w-64 2xl:w-72"
          />
        </article>
      </div>
    </main>
  );
}
