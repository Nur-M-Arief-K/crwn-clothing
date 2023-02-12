import { createSlice } from "@reduxjs/toolkit";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    SET_CART_ITEMS: (state, action) => {
      return {
        ...state,
        cartItems: action.payload,
      };
    },
    SET_IS_CART_OPEN: (state, action) => {
      return {
        ...state,
        isCartOpen: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addDefaultCase((state) => state);
  },
});

export const { reducer: cartReducer } = cartSlice;