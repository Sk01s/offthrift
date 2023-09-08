import {
  spfOne,
  productOneImg1,
  productOneImg2,
  productOneImg3,
  productOneImg4,
  productTwoImg1,
  productTwoImg2,
  productTwoImg3,
  productTwoImg4,
  productThreeImg1,
  productThreeImg2,
  productThreeImg3,
  productThreeImg4,
  productThreeImg5,
} from "../assets/images/index";

// =================== NavBarList Start here ====================
export const navBarList = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
  },
  {
    _id: 1002,
    title: "Cart",
    link: "/cart",
  },

  {
    _id: 1003,
    title: "Contact",
    link: "contact",
  },
];
// =================== NavBarList End here ======================

// =================== PaginationItems Start here ===============

export const paginationItems = [
  {
    _id: 100,
    img: [productOneImg1, productOneImg2, productOneImg3, productOneImg4],
    productName: "Nike AF1 full black",
    price: "199.00",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 101,
    img: [productTwoImg1, productTwoImg2, productTwoImg3, productTwoImg4],
    productName: "Nike AF1 React DMSX",
    price: "199.00",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 101,
    img: [
      productThreeImg1,
      productThreeImg2,
      productThreeImg3,
      productThreeImg4,
      productThreeImg5,
    ],
    productName: "Nike Lunarglide 6",
    price: "300.00",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
];
// =================== PaginationItems End here =================
