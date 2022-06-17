import React from "react";
import { Carousel } from "../components/carousel/Carousel";
import { Homecards } from "../components/homecards/Homecards";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Homecards />
      <Footer />
    </div>
  );
};
