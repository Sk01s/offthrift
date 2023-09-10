import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  products: [],
  address: {
    firstName: "",
    lastName: "",
    city: "",
    phoneNumber: 0,
    email: "",
    street: "",
    nearBy: "",
  },
};

export const offthriftSlice = createSlice({
  name: "Offthrift",
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.address = action.payload;
    },
    addToCart: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {;
      } else {
        state.products.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addAddress,
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
} = offthriftSlice.actions;
export default offthriftSlice.reducer;
