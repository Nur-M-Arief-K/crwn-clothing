import { Component } from "react";
import { connect } from "react-redux";

import { withUseNavigate } from "../../utils/wrapper/wrapper.utils";
import { selectCartItems } from "../../store/cart/cart.selector";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

class CartDropdown extends Component {
  goToCheckoutHandler = () => {
    const navigate = this.props.navigate;
    navigate("/checkout");
  };

  render() {
    const cartItems = this.props.selectCartItems;
    return (
      <CartDropdownContainer>
        <CartItems>
          {cartItems.length ? (
            cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </CartItems>
        <Button onClick={this.goToCheckoutHandler}>Go To Checkout</Button>
      </CartDropdownContainer>
    );
  };
};

export default connect(state => ({ selectCartItems: selectCartItems(state) }))(withUseNavigate(CartDropdown));