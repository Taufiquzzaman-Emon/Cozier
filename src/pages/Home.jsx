import React from "react";
import Hero from "../components/Hero";
import LatestProducts from "../components/LatestProducts";
import BestSeller from "../components/BestSeller";
import Policy from "../components/Policy";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestProducts />
      <BestSeller />
      <Policy />
      <NewsLetter />
    </div>
  );
};

export default Home;
