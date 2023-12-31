import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import ProductsOnSale from "../../components/pageProps/productDetails/ProductsOnSale";
import { useRef } from "react";

const ProductDetails = () => {
  const ImagesEl = useRef([]);
  const buttonEl = useRef([]);
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    setProductInfo(location.state.item);
    setPrevLocation(location.pathname);
  }, [location, productInfo]);

  const togggle = (index, array) => {
    return array.map((element, i) => {
      if (i === index) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
      return element;
    });
  };

  const showImage = (index) => {
    togggle(index, ImagesEl.current);
    togggle(index, buttonEl.current);
  };
  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4">
        <div className="xl:-mt-10 -mt-7">
          <Breadcrumbs title="" prevLocation={prevLocation} />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
          <div className="xl:h-[80vh] h-[60vh] mb-12 xl:col-span-2  relative ">
            {productInfo.img?.slice(2).map((img, index) => {
              return (
                <React.Fragment key={index}>
                  <img
                    draggable="false"
                    ref={(e) => (ImagesEl.current[index] = e)}
                    className="w-full h-full object-cover rounded-3xl absolute duration-200 transition-all"
                    src={img}
                    alt={img}
                  />
                  <button
                    ref={(e) => (buttonEl.current[index] = e)}
                    onMouseEnter={() => showImage(index)}
                    onTouchStart={() => showImage(index)}
                    className={` z-30 absolute -bottom-14 left-2 w-12 h-12  duration-200  transition-all overflow-hidden rounded-md`}
                    style={{ translate: `${index * 4}rem` }}
                  >
                    <img src={img} alt="product img" />
                  </button>
                </React.Fragment>
              );
            })}
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
            <ProductInfo productInfo={productInfo} />
          </div>
          <div className="h-full">
            <ProductsOnSale />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
