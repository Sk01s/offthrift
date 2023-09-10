import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/offthriftSlice";

const ItemCard = ({ item, Quantity }) => {
  const dispatch = useDispatch();
  console.log(item);
  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2">
      <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
        <ImCross
          onClick={() => dispatch(deleteItem(item._id))}
          className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
        />
        <img
          className="w-32 h-32 rounded-xl"
          src={item.image[0]}
          alt="productImage"
        />
        <h1 className="font-titleFont font-semibold">{item.name}</h1>
      </div>
      <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div className="flex w-1/3 items-center text-lg font-semibold">
          ${item.price}
        </div>
        {Quantity && (
          <div className="md:visible xl:visible lg:visible invisible d dw-1/3 flex items-center gap-6 text-lg">
            <p>1</p>
          </div>
        )}
        <div className="w-1/3 flex items-center font-titleFont font-bold text-lg"></div>
      </div>
    </div>
  );
};

export default ItemCard;
