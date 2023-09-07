import React from "react";

import BestSellers from "../../components/home/BestSellers/BestSellers";

import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <div className="max-w-container mx-auto px-4">
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Home;
