import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
const Payment = () => {
  const location = useLocation();
  const products = useSelector((state) => state.offthriftReducer.products);
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location?.state?.data);
  }, [location]);

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // ========== Error Messages Start here ============
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errCity, setErrCity] = useState("");
  const [errPhoneNumber, setErrPhoneNumber] = useState();
  const [errStreet, setErrStreet] = useState();
  // ========== Error Messages End here ==============
  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handleCity = (e) => {
    setCity(e.target.value);
    setErrCity("");
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    setErrPhoneNumber("");
  };
  const handleStreet = (e) => {
    setStreet(e.target.value);
    setErrStreet("");
  };

  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============

  const handleOrder = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your Name");
    }
    if (!email) {
      setErrEmail("Enter your Email");
    } else {
      if (!EmailValidation(email)) {
        setErrEmail("Enter a Valid Email");
      }
    }
    if (!city) {
      setErrCity("Enter your Messages");
    }
    if (!phoneNumber) {
      setErrPhoneNumber("Enter your phone number");
    }
    if (!city) {
      setErrCity("Enter your City");
    }
    if (!street) {
      setErrStreet("Enter your Street");
    }
    if (
      clientName &&
      email &&
      EmailValidation(email) &&
      city &&
      phoneNumber &&
      street
    ) {
      setSuccessMsg(
        `Thank you dear ${clientName}, Your messages has been received successfully. Futher details will sent to you by your email at ${email}.`
      );
    }
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Checkout Details" prevLocation={prevLocation} />
      {successMsg ? (
        <p className="pb-20 w-96 font-medium text-green-500">{successMsg}</p>
      ) : (
        <form
          className="pb-20"
          onSubmit={(e) => {
            e.preventDefault();
            handleOrder(e);
            emailjs
              .sendForm(
                "service_fveeib7",
                "template_lnzhw26",
                e.target,
                process.env.REACT_APP_EMAIL_JS
              )
              .then((e) => console.log(e))
              .catch((e) => console.log(e));
            console.log(e.target.name);
          }}
        >
          <h1 className="font-titleFont font-semibold text-3xl">
            Fill up a Form
          </h1>
          <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
            <div>
              <label
                htmlFor="name"
                className="text-base font-titleFont font-semibold px-2"
              >
                Name
              </label>
              <input
                onChange={handleName}
                value={clientName}
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="text"
                placeholder="Enter your name here"
                id="name"
                name="name"
              />
              {errClientName && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errClientName}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-base font-titleFont font-semibold px-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                onChange={handleEmail}
                value={email}
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="email"
                placeholder="Enter your name here"
              />
              {errEmail && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errEmail}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="city"
                className="text-base font-titleFont font-semibold px-2"
              >
                City
              </label>
              <input
                id="city"
                name="city"
                onChange={handleCity}
                value={city}
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                type="text"
                placeholder="Enter your name here"
              ></input>
              {errCity && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errCity}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="street"
                className="text-base font-titleFont font-semibold px-2"
              >
                Street
              </label>
              <input
                id="street"
                name="street"
                onChange={handleStreet}
                value={street}
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                type="text"
                placeholder="Enter your name here"
              ></input>
              {errStreet && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errStreet}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="text-base font-titleFont font-semibold px-2"
              >
                PhoneNumber
              </label>
              <div className="flex justify-center items-center gap-2">
                <span className="w-8">+961</span>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={handlePhoneNumber}
                  value={phoneNumber}
                  className="w-full  py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                  type="number"
                  placeholder="Enter your name here"
                ></input>
              </div>
              {errPhoneNumber && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errPhoneNumber}
                </p>
              )}
            </div>
            <input
              name="item"
              type="text"
              className="w-0 h-0"
              defaultValue={products.map((product) => product.name).join(" - ")}
            />
            <button
              className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
              type="submit"
            >
              order
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Payment;
