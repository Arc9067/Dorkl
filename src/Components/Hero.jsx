import React from "react";
import Logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="min-h-screen w-full py-32" id="hero">
      <div className="container flex justify-center items-center flex-col">
        <h1 className="text-5xl md:text-7xl text-center strokeIt font-fightNight capitalize">
          welcome to
        </h1>
        <h1 className="font-fightNight text-5xl text-center md:text-7xl strokeIt text-red-700">
          Red Hot Cock <span className="text-yellow-400">and</span>{" "}
          <span className="text-black">Dorkl</span>
        </h1>

        <div className="flex mt-10 flex-wrap font-fightNight items-center justify-center gap-x-10 gap-y-5">
          <a
            href=""
            className="w-44 h-14 px-8 py-4 bg-yellow-400 rounded-full justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-black text-base font-normal leading-snug tracking-tight">
              Play Now
            </div>
          </a>
          <a
            href=""
            className="w-44 h-14 px-8 py-4 bg-[#CD2722] rounded-full shadow border border-white justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white text-base font-normal leading-snug tracking-tight">
              Chart
            </div>
          </a>
        </div>
        <img src={Logo} alt="" className="md:w-[25rem] mt-10" />
      </div>
    </section>
  );
};

export default Hero;
