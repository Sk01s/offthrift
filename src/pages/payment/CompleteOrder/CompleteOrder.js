import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../../../components/pageProps/Breadcrumbs";
import ItemCard from "../../Cart/ItemCard";
import { resetCart } from "../../../redux/offthriftSlice";

const CompleteOrder = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.offthriftReducer.products);
  const orderDetails = useSelector((state) => state.offthriftReducer.address);
  const dispatch = useDispatch();
  const [succsessMSG, setSuccsessMSG] = useState("");
  const sendOrder = (orderDetails, button) => {
    emailjs
      .send(
        "service_fveeib7",
        "template_lnzhw26",
        orderDetails,
        process.env.REACT_APP_EMAIL_JS
      )
      .then((e) => {
        setSuccsessMSG(`
        Thank You for Your Order!
      Your order has been received successfully. We'll keep you updated on the progress, Further details will be sent to your email at ${orderDetails.email}
      Please note that your items will be delivered within 2 - 5 working days. 
      if you have any questions, feel free to reach out. Thank you ${orderDetails.firstName} ${orderDetails.lastName} for choosing us!`);
        window.scrollTo(0, 0);
        dispatch(resetCart());
      })

      .catch((e) => (button.disabled = false));
  };
  const handleOrder = (button) => {
    sendOrder(
      {
        ...orderDetails,
        item: products.map((product) => product.name).join(" - "),
      },
      button
    );
  };

  return (
    <main className="max-w-container mx-auto px-4 ">
      <Breadcrumbs title="Complete your Order " prevLocation={"Information"} />
      {succsessMSG ? (
        <p className="pb-20 w-96 font-medium text-green-500">{succsessMSG}</p>
      ) : (
        <>
          <h3 className="text-lg mb-6 text-gray-500">
            <span className="text-primeColor font-semibold">
              Client Name :{" "}
            </span>
            {orderDetails.firstName} {orderDetails.lastName}
          </h3>
          <h3 className=" text-lg ml-1 mb-2 font-semibold">Contact :</h3>
          <div className="border-solid border-[#eee] border-2  p-2 mb-6 w-[30rem] max-w-[90vw]">
            <p className="text-md mb-6 text-gray-500">
              <span className="text-primeColor">Email : </span>
              {orderDetails.email}
            </p>
            <p className="text-md  text-gray-500">
              <span className="text-primeColor">Number : +961 </span>
              {orderDetails.phoneNumber}
            </p>
          </div>
          <h3 className="text-lg font-semibold ml-1 mb-2">
            Shipping address :
          </h3>

          <div className="border-solid border-[#eee] border-2  p-2 w-[30rem] max-w-[90vw]">
            {orderDetails.city} {"  "}
            {orderDetails.street} {"  "}
            {orderDetails.nearBy} {orderDetails.building} {orderDetails.floor}
          </div>
          <div className="flex flex-col gap-5 mt-6 ">
            <h3 className="text-xl font-semibold ml-1">Items</h3>
            {products.map((item, index) => (
              <div key={index}>
                <ItemCard item={item} Quantity={false} />
              </div>
            ))}
          </div>
          <h3 className="text-xl font-semibold ml-1">Pyament</h3>
          <p className="text-sm text-gray-600 mb-2">
            All transactions are secure and encrypted
          </p>
          <div className="border-solid border-[#eee] border-2 p-2 mb-2 lg:w-[30rem] xl:w-[30rem] md:w-[30rem]">
            <button>Cash on delivery (COD)</button>
          </div>
          <h3 className="text-lg mt-6 ml-1">Order Price</h3>
          <div className="border-solid border-[#eee] border-2 py-2 mb-3 lg:w-[30rem] xl:w-[30rem] md:w-[30rem]">
            <div className="flex gap-2 mb-2 border-solid border-[#eee] border-b-2 px-3  ">
              <h4>Sub-total : </h4>{" "}
              <span className="text-gray-500">
                $
                {products.reduce((acc, next) => {
                  return acc + parseFloat(next.price);
                }, 0)}
              </span>
            </div>
            <div className="flex gap-2 mb-2 border-solid border-[#eee] border-b-2 px-3 ">
              <h4>Shipping fees : </h4>{" "}
              <span className="text-gray-500">$ 5</span>
            </div>
            <div className="flex gap-2  px-3 ">
              <h4>Total order price : </h4>{" "}
              <span className="text-gray-500">
                ${" "}
                {products.reduce((acc, next) => {
                  return acc + parseFloat(next.price);
                }, 0) + 5}
              </span>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.currentTarget.disabled = true;
              handleOrder(e.currentTarget);
            }}
            className=" p-2 lg:w-[30rem] xl:w-[30rem] md:w-[30rem]  w-full text-white bg-primeColor disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Complete order
          </button>
        </>
      )}
    </main>
  );
};

export default CompleteOrder;
