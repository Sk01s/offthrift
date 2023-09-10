import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { productsData } from "../../../constants/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {productsData.map((product) => (
          <Product
            key={product._id}
            _id={product._id}
            img={product.img}
            productName={product.productName}
            price={product.price}
            badge={product.badge}
            des={product.des}
            condition={product.condition}
            size={product.size}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
