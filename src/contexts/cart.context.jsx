import { Component, createContext } from "react";
import { createAction } from "../utils/reducer/create-action.utils";
import withUseReducer from "../utils/withReducer/with-reducer";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

// REDUCERS

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

class CartProvider extends Component {
  updateCartItemsReducer = (cartItems) => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    const payload = {
      cartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    };

    this.props.dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
  };

  setIsCartOpen = (bool) => {
    this.props.dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  };

  addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(this.props.state.cartItems, productToAdd);
    this.updateCartItemsReducer(newCartItems);
  };

  removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(this.props.state.cartItems, cartItemToRemove);
    this.updateCartItemsReducer(newCartItems);
  };

  clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(this.props.state.cartItems, cartItemToClear);
    this.updateCartItemsReducer(newCartItems);
  };

  render() {
    const { isCartOpen, cartItems, cartCount, cartTotal } = this.props.state;
    const { setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart } = this;
    const value = {
      isCartOpen,
      setIsCartOpen,
      cartItems,
      addItemToCart,
      removeItemFromCart,
      clearItemFromCart,
      cartCount,
      cartTotal,
    };
    return (
      <CartContext.Provider value={value}>{ this.props.children }</CartContext.Provider>
    );
  }
  
};

export default withUseReducer(cartReducer, INITIAL_STATE)(CartProvider);