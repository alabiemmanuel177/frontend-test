import React from "react";
import { Carousel1 } from "../components/carousel/Carousel1";
import { Homecards } from "../components/homecards/Homecards";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel1 />
      <Homecards />
      <Footer />
    </div>
  );
};
