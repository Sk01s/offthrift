import React from "react";
import { productFiveImg2 } from "../../../assets/images/index";
const Landing = () => {
  return (
    <section className="py-[8rem] flex xl:flex-row md:flex-row sm:flex-col xs:flex-col flex-col justify-start items-center px-2 bg-[#eeeeee]  relative z-10  after:left-0 after:w-[95vw] after:absolute after:h-full after:bg-gradient-to-t from-[#eeeeee51] to-[#eeeeeebf]  after:bg-opacity-30 after:-z-10 ">
      <div className="  ml-4 flex gap-5 flex-col lg:items-start md:items-start  items-center z-10">
        <h1 className="gradient-1 text- text-4xl sm:text-3xl xs:text-2xl md:text-4xl lg:text-4xl xl:text-5xl xs:text-center">
          Welcome to Off Thrift !
        </h1>{" "}
        <p className="text-gray-600 lg:text-left xl:text-left  sm:text-center xs:text-center max-w-full lg:w-[30rem] ">
          Your Destination for Authentic Used shoes . Explore our curated
          collection of quality items at unbeatable prices. Shop now and step
          into the world of Off Thrift!"
        </p>
      </div>
    </section>
  );
};

export default Landing;
