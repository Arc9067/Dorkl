import React from "react";
import twitter from "../assets/icons/twitter.svg";
import telegram from "../assets/icons/telegram.svg";
import nav from "../assets/icons/nav.svg";
import ether from "../assets/icons/ether.svg";
import dex from "../assets/icons/dex.svg";

const Header = () => {
  return (
    <header className="py-5 absolute top-0 z-50 w-full  ">
      <nav className="container flex justify-between items-center">
        <a
          href=""
          className="font-fightNight text-2xl md:text-3xl text-red-700"
        >
          Red Hot Cock <span className="text-yellow-400">and</span>{" "}
          <span className="text-black">Dorkl</span>
        </a>

        <ul className="hidden lg:flex  items-center gap-12 capitalize ">
          <li className="hover:text-black transition">
            <a href="">home</a>
          </li>
          <li className="hover:text-black transition">
            <a href="">about</a>
          </li>{" "}
          <li className="hover:text-black transition">
            <a href="">tokenomics</a>
          </li>
          <li className="hover:text-black transition">
            <a href="">roadmap</a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-2 justify-between">
          <a href="https://t.me/RHCvsD" className="">
            <img src={telegram} alt="" />
          </a>
          <a href="https://twitter.com/RHCvsD" className="">
            <img src={twitter} alt="" />
          </a>
        </div>

        <button className="lg:hidden">
          <img src={nav} alt="" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
