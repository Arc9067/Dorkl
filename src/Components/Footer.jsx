import React from "react";
import footerLogo from "../assets/footerLogo.png";
import twitter from "../assets/icons/twitter.svg";
import telegram from "../assets/icons/telegram.svg";
import nav from "../assets/icons/nav.svg";
import ether from "../assets/icons/ether.svg";
import dex from "../assets/icons/dex.svg";

const Footer = () => {
  return (
    <footer className="pb-12 py-16 w-full">
      <div className="container flex justify-center items-center gap-6 flex-col">
        <img src={footerLogo} alt="" />
        <h2 className="text-white text-2xl font-fightNight">
          Connect With Us{" "}
        </h2>
        <div className="flex items-center gap-2 justify-between">
          <a href="" className="">
            <img src={telegram} alt="" />
          </a>
          <a href="" className="">
            <img src={twitter} alt="" />
          </a>
          <a href="" className="">
            <img src={dex} alt="" />
          </a>
          <a href="" className="">
            <img src={ether} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
