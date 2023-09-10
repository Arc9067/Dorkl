import React from "react";

const Mics = () => {
  return (
    <section className="py-20 w-full" id="map">
      <div className="container flex justify-center flex-col items-center">
        <h1 className="text-white text-5xl font-fightNight">Tokenomics</h1>
        <h2 className="text-red-700 text-2xl font-fightNight">
          Total Supply : 100,000,000.
        </h2>

        <button className="mt-14  px-8 py-3 text-white  font-semibold bg-sky-600 rounded-full justify-center items-center gap-2.5 inline-flex">
          Contract: 0x000000000000..
        </button>

        <div className="grid mt-16 font-fightNight grid-cols-1 lg:grid-cols-3 justify-between items-center gap-8">
          <article className="h-72 pl-12 pr-56 py-20 bg-gradient-to-r from-red-900 to-sky-900 rounded-xl justify-start items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-white text-7xl font-normal">3%</div>
              <div className="text-white text-3xl font-openSans">Taxes</div>
            </div>
          </article>
          <article className="h-72 pl-12 pr-56 py-20 bg-gradient-to-r from-red-900 to-sky-900 rounded-xl justify-start items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-white text-7xl font-normal">3%</div>
              <div className="text-white text-3xl font-openSans">Taxes</div>
            </div>
          </article>{" "}
          <article className="h-72 pl-12 pr-56 py-20 bg-gradient-to-r from-red-900 to-sky-900 rounded-xl justify-start items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-white text-7xl font-normal">3%</div>
              <div className="text-white text-3xl font-openSans">Taxes</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Mics;
