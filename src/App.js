import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
  Link,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import Terms from "./pages/Terms/Terms";
import { useState } from "react";
const Layout = () => {
  const [accepeted, setAccepeted] = useState(localStorage.getItem("terms"));
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
      {!accepeted && (
        <div className="sticky bottom-0 bg-gray-100 flex flex-col items-center gap-2 text-zinc-600">
          <div>
            We use cookies to ensure you have the best browsing experience on
            our website. By using our site, you acknowledge that you have read
            and understood our
            <Link className="text-blue-600" to={"/terms"}>
              Cookie Policy & Privacy Policy
            </Link>
          </div>
          <button
            className="bg-primeColor text-white text-lg font-bodyFont w-fit px-2 h-[50px] hover:bg-black duration-300 font-bold"
            onClick={() => {
              localStorage.setItem("terms", true);
              setAccepeted(true);
            }}
          >
            Accept
          </button>
        </div>
      )}
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        {/* ==================== Header Navlink End here ===================== */}
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/paymentgateway" element={<Payment />}></Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
