import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/offthriftSlice";
import { useNavigate } from "react-router-dom";
const ProductInfo = ({ productInfo }) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-xl font-semibold">${productInfo.price}</p>
      <p className="text-base text-gray-600 ">
        Conditon: {productInfo.condition} / 10
      </p>
      <p className="text-base text-gray-600 ">Size: {productInfo.size}</p>
      <p className="text-base text-gray-600">{productInfo.des}</p>

      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo.id,
              name: productInfo.productName,
              quantity: 1,
              image: productInfo.img,
              badge: productInfo.badge,
              price: productInfo.price,
              colors: productInfo.color,
            })
          )
        }
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Add to Cart
      </button>
      <button
        onClick={() => {
          dispatch(
            addToCart({
              _id: productInfo.id,
              name: productInfo.productName,
              quantity: 1,
              image: productInfo.img,
              badge: productInfo.badge,
              price: productInfo.price,
              colors: productInfo.color,
            })
          );
          history("/cart");
        }}
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductInfo;
