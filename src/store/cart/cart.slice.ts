import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartItem } from './cart.types';

export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
} as CartState;

const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    SET_IS_CART_OPEN: (state, action: PayloadAction<boolean>) => {
      return ({
              ...state,
              isCartOpen: action.payload,
      });
    },
    SET_CART_ITEMS: (state, action: PayloadAction<CartItem[]>) => {
      return({
        ...state,
      cartItems: action.payload,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addDefaultCase((state) => state);
  },
});

export const { reducer: cartReducer } = cartSlice;