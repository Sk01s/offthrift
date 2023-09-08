import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { paginationItems } from "../../../constants/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {paginationItems.map((product) => (
          <Product
            _id={product._id}
            img={product.img}
            productName={product.productName}
            price={product.price}
            badge={product.badge}
            des={product.des}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
