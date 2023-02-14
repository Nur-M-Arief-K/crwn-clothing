import { cartReducer, SET_IS_CART_OPEN, SET_CART_ITEMS } from "./cart.slice";

import { CART_INITIAL_STATE } from "./cart.slice";
describe("CartSlice reducer tests", () => {
  test("it should return the initial state", () => {
    expect(cartReducer(undefined, { type: undefined })).toEqual(
      CART_INITIAL_STATE
    );
  });
  test("it should set cart.isCartOpen to true", () => {
    const payload = true;
    const expectedResult = {
      isCartOpen: true,
      cartItems: [],
    };

    expect(cartReducer(CART_INITIAL_STATE, SET_IS_CART_OPEN(payload))).toEqual(
      expectedResult
    );
  });
  test("it should set cart.cartItems to have a new value", () => {
    const payload = [{
        name: "cool hat",
        price: 1,
        quantity: 1,
        imageUrl: "https://image-url.com/"
    }];

    const expectedResult = {
        isCartOpen: false,
        cartItems: payload,
    };
    
    expect(cartReducer(CART_INITIAL_STATE, SET_CART_ITEMS(payload))).toEqual(expectedResult);
  });
});
