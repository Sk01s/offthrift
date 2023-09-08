import React from "react";
import { paginationItems } from "../../../constants";
import { useNavigate } from "react-router-dom";

const ProductsOnSale = () => {
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const navigate = useNavigate();

  return (
    <div>
      <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
        Products on sale
      </h3>
      <div className="flex flex-col gap-2">
        {paginationItems.map((item) => (
          <div
            onClick={() => {
              navigate(`/product/${idString(item._id)}`, {
                state: {
                  item,
                },
              });
            }}
            key={item._id}
            className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2 cursor-pointer"
          >
            <div>
              <img className="w-24" src={item.img[0]} alt={item.img[0]} />
            </div>
            <div className="flex flex-col gap-2 font-titleFont">
              <p className="text-base font-medium">{item.productName}</p>
              <p className="text-sm font-semibold">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOnSale;
