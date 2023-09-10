import React from "react";
import logo2 from "../assets/logo2.png";

const About = () => {
  return (
    <section id="about" className="py-20 w-full relative">
      <div className="w-96 h-96 hidden lg:block  bg-gradient-to-r from-rose-600 to-sky-600 blur-[120px] absolute left-0 top-0 z-[1]" />
      <div className="container relative z-[2] grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
        <article className="flex flex-col gap-5">
          <h2 className="text-white text-2xl font-fightNight">
            Fully Decentralized
          </h2>
          <h1 className="text-white text-5xl font-fightNight">
            Online Cryptocurrency
            <br />
            Fighting Platform
          </h1>
          <p className="text-white text-base font-normal leading-loose tracking-tight">
            The project is fully decentralized and community based. We just do
            our best to keep everyone together as an army. If you want to do
            something then do it, if someone asks for a hand out you can tell
            them that Pepe never paid for a thing. The project is fully
            decentralized and community based.{" "}
          </p>
        </article>
        <img src={logo2} alt="" />
      </div>
    </section>
  );
};

export default About;
