import React, { useRef, useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAddress } from "../../redux/offthriftSlice";
const Payment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formEl = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [NearBy, setNearBy] = useState("");
  const [building, setBuilding] = useState("");
  const [floor, setFloor] = useState("");

  // ========== Error Messages Start here ============
  const [errFirstName, setErrFirstName] = useState("");
  const [errLastName, setErrLastName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errCity, setErrCity] = useState("");
  const [errPhoneNumber, setErrPhoneNumber] = useState();
  const [errStreet, setErrStreet] = useState();
  const [errNearBy, setErrNearBy] = useState();
  const [errBuilding, setErrBuilding] = useState();
  const [errFloor, setErrFloor] = useState();
  // ========== Error Messages End here ==============

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setErrFirstName("");
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    setErrLastName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handleCity = (e) => {
    setCity(e.target.value);
    setErrCity("");
  };
  const handleStreet = (e) => {
    setStreet(e.target.value);
    setErrStreet("");
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    setErrPhoneNumber("");
  };
  const handleNearBy = (e) => {
    setNearBy(e.target.value);
    setErrNearBy("");
  };
  const handleBuilding = (e) => {
    setBuilding(e.target.value);
    setErrBuilding("");
  };
  const handleFloor = (e) => {
    setFloor(e.target.value);
    setErrFloor("");
  };

  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============

  const handleOrder = (e) => {
    if (!firstName) {
      setErrFirstName("Enter your Name");
    }
    if (!lastName) {
      setErrLastName("Enter your Name");
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
    if (!building) {
      setErrBuilding("Enter your Building");
    }
    if (!floor) {
      setErrFloor("Enter your Floor");
    }
    if (
      firstName &&
      lastName &&
      email &&
      EmailValidation(email) &&
      city &&
      phoneNumber &&
      street &&
      NearBy &&
      floor &&
      building
    ) {
      dispatch(
        addAddress({
          email: e.email.value,
          firstName: e.firstName.value,
          lastName: e.lastName.value,
          city: e.city.value,
          street: e.street.value,
          phoneNumber: e.phoneNumber.value,
          nearBy: e.nearBy.value,
          building: e.building.value,
          floor: e.floor.value,
        })
      );
      navigate("/completepayment");
    }
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Information" prevLocation={"cart"} />
      <form className="pb-20" ref={formEl}>
        <h1 className="font-titleFont font-semibold text-3xl">
          Fill up a Form
        </h1>
        <div className="w-[500px] max-w-[92vw] h-auto py-6 flex flex-col gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="text-base font-titleFont font-semibold px-2"
            >
              First Name
            </label>
            <input
              onChange={handleFirstName}
              value={firstName}
              className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
              type="text"
              placeholder="Enter your data here"
              id="firstName"
              name="firstName"
            />
            {errFirstName && (
              <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                <span className="text-sm italic font-bold">!</span>
                {errFirstName}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="text-base font-titleFont font-semibold px-2"
            >
              Last Name
            </label>
            <input
              onChange={handleLastName}
              value={lastName}
              className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
              type="text"
              placeholder="Enter your data here"
              id="lastName"
              name="lastName"
            />
            {errLastName && (
              <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                <span className="text-sm italic font-bold">!</span>
                {errLastName}
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
              placeholder="Enter your data here"
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
              placeholder="Enter your data here"
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
              placeholder="Enter your data here"
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
              htmlFor="nearBy"
              className="text-base font-titleFont font-semibold px-2"
            >
              Near By
            </label>
            <input
              id="nearBy"
              name="nearBy"
              onChange={handleNearBy}
              value={NearBy}
              className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
              type="text"
              placeholder="Enter your data here"
            ></input>
            {errNearBy && (
              <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                <span className="text-sm italic font-bold">!</span>
                {errNearBy}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="building"
              className="text-base font-titleFont font-semibold px-2"
            >
              Building
            </label>
            <input
              id="building"
              name="building"
              onChange={handleBuilding}
              value={building}
              className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
              type="text"
              placeholder="Enter your data here"
            ></input>
            {errBuilding && (
              <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                <span className="text-sm italic font-bold">!</span>
                {errBuilding}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="floor"
              className="text-base font-titleFont font-semibold px-2"
            >
              Floor Number
            </label>
            <input
              id="floor"
              name="floor"
              onChange={handleFloor}
              value={floor}
              className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
              type="number"
              placeholder="Enter your data here"
            ></input>
            {errFloor && (
              <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                <span className="text-sm italic font-bold">!</span>
                {errFloor}
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
                type="tel"
                className="w-full  py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                placeholder="Enter your data here"
              ></input>
            </div>
            {errPhoneNumber && (
              <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                <span className="text-sm italic font-bold">!</span>
                {errPhoneNumber}
              </p>
            )}
          </div>
          <button
            className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
            type="button"
            onClick={() => {
              handleOrder(formEl.current);
            }}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
