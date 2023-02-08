import { Component } from "react";
import { connect } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

class Checkout extends Component {
  render() {
    const cartItems = this.props.selectCartItems;
    const cartTotal = this.props.selectCartTotal;
    return (
      <CheckoutContainer>
        <CheckoutHeader>
          <HeaderBlock>
            <span>Product</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Description</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Quantity</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Price</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Remove</span>
          </HeaderBlock>
        </CheckoutHeader>
        {cartItems.map((cartItem) => {
          const { id } = cartItem;
          return <CheckoutItem key={id} cartItem={cartItem} />;
        })}
        <Total>${cartTotal}</Total>
        <PaymentForm />
      </CheckoutContainer>
    );
  };
};

export default connect(state => ({selectCartItems: selectCartItems(state), selectCartTotal: selectCartTotal(state)}))(Checkout);
