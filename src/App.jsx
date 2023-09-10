import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Map from "./Components/Map";
import Mics from "./Components/Mics";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white relative font-openSans">
      <Header />
      <Hero />
      <About />
      <Map />
      <Mics />
      <Banner />
      <Footer />
    </div>
  );
};

export default App;
