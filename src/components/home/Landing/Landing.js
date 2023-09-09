import React from "react";
import { productFiveImg2 } from "../../../assets/images/index";
const Landing = () => {
  return (
    <section className="lg:h-[70vh] md:h-[70vh]  flex xl:flex-row md:flex-row sm:flex-col xs:flex-col flex-col justify-start items-center py-4 px-2 bg-[#eeeeee]  relative z-10  after:left-0 after:w-[95vw] after:absolute after:h-full after:bg-gradient-to-t from-[#eeeeee51] to-[#eeeeeebf]  after:bg-opacity-30 after:-z-10 ">
      <div className="xl:w-[55%] lg:w-[60%] md:w-[60%]   ml-4 flex gap-5 flex-col lg:items-start md:items-start  items-center">
        <h1 className="text-primeColor text-4xl sm:text-3xl xs:text-2xl md:text-4xl lg:text-4xl xl:text-5xl xl:text-center">
          Welcome to Off Thrift Shoes!
        </h1>{" "}
        <p className="text-gray-600 sm:text-center xs:text-center max-w-full ">
          Explore our curated collection of quality shoes all at unbeatable
          prices. Shop now and step into the world of Off Thrift!" Your
          Destination for Authentic Used
        </p>
      </div>
      <img
        src={productFiveImg2}
        className={"xl:w-[45%] lg:w-[40%] h-full object-contain"}
        alt="product image"
      />
    </section>
  );
};

export default Landing;
