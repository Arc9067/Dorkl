import React from "react";
import logo2 from "../assets/logo2.png";

const About = () => {
  return (
    <section id="about" className="py-20 w-full relative">
      <div className="w-96 h-96 hidden lg:block  bg-gradient-to-r from-rose-600 to-sky-600 blur-[120px] absolute left-0 top-0 z-[1]" />
      <div className="container relative z-[2] grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
        <article className="flex flex-col gap-5">
          <h1 className="text-white capitalize text-5xl font-fightNight">
            The duel of two Goliaths
          </h1>
          <p className="text-white text-base font-normal leading-loose tracking-tight">
            These two giants have come head-to-head fighting for the #1 spot!
            One will win and the other will be defeated. Which side are you on?
          </p>
        </article>
        <img src={logo2} alt="" />
      </div>
    </section>
  );
};

export default About;
