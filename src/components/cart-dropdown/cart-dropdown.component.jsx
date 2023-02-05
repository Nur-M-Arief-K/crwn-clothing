import { Component } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

class CartDropdown extends Component {    
    render() {
        const { cartItems } = this.context;
        return (
          <CartDropdownContainer>
            <CartItems>
              {cartItems.length ? (
                cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
              ) : (
                <EmptyMessage>Your cart is empty</EmptyMessage>
              )}
            </CartItems>
            <Link to="/checkout">
               <Button>Go To Checkout</Button>
            </Link>
          </CartDropdownContainer>
        );
    };
};

CartDropdown.contextType = CartContext;

export default CartDropdown;
