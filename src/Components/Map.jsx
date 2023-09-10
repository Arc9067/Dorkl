import React from "react";
import token from "../assets/icons/token.svg";

const Map = () => {
  return (
    <section className="py-10 w-full" id="map">
      <div className="container flex justify-center flex-col items-center">
        <h1 className="text-white text-5xl font-fightNight">Our Roadmap</h1>

        <div className="w-full mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-x-20 gap-y-8">
          <article className="md: flex flex-col gap-5 items-start rounded-xl bg-[#BD0B09] p-4">
            <img src={token} alt="" />
            <h1 className="text-white text-2xl font-fightNight">Phase One</h1>
            <p className=" text-white text-base font-normal leading-loose">
              - Content creation <br />- Creating socials <br /> - Official
              launch timing
            </p>
          </article>
          <article className="md: flex flex-col gap-5 items-start rounded-xl bg-[#BD0B09] p-4">
            <img src={token} alt="" />
            <h1 className="text-white text-2xl font-fightNight">Phase Two</h1>
            <p className=" text-white text-base font-normal leading-loose">
              - Pre-marketing <br />- Contract creation <br /> - Preparing for
              launch timing
            </p>
          </article>
          <article className="md: flex flex-col gap-5 items-start rounded-xl bg-[#BD0B09] p-4">
            <img src={token} alt="" />
            <h1 className="text-white text-2xl font-fightNight">Phase Three</h1>
            <p className=" text-white text-base font-normal leading-loose">
              - Official launch <br />- Lock/renounce <br /> - ETH trending
            </p>
          </article>
          <article className="md: flex flex-col gap-5 items-start rounded-xl bg-[#BD0B09] p-4">
            <img src={token} alt="" />
            <h1 className="text-white text-2xl font-fightNight">Phase four</h1>
            <p className=" text-white text-base font-normal leading-loose">
              - Post-launch marketing <br />- Dextools update <br /> - CG/CMC
              applications
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Map;
