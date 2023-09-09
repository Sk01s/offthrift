import React from "react";

import BestSellers from "../../components/home/BestSellers/BestSellers";
import Landing from "../../components/home/Landing/Landing";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Landing />
      <div className="max-w-container mx-auto px-4">
        <BestSellers />
      </div>
    </div>
  );
};

export default Home;
