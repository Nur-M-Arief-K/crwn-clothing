import { Component } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
  } from './checkout.styles';

class Checkout extends Component {
    render() {
        const { cartItems, cartTotal } = this.context;
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
                {
                    cartItems.map(cartItem => {
                        const { id } = cartItem;
                        return (
                            <CheckoutItem key={id} cartItem={cartItem} />
                        )
                    })
                }
                <Total>${ cartTotal }</Total>
            </CheckoutContainer>
        )
    };
};

Checkout.contextType = CartContext;

export default Checkout;