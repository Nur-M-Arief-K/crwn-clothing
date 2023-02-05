import { Component } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

class Checkout extends Component {
    render() {
        const { cartItems, cartTotal } = this.context;
        return (
            <div className="checkout-container">
                <div className="checkout-header">
                    <div className="header-block">
                        <span>Product</span>
                    </div>
                    <div className="header-block">
                        <span>Description</span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Price</span>
                    </div>
                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div>
                {
                    cartItems.map(cartItem => {
                        const { id } = cartItem;
                        return (
                            <CheckoutItem key={id} cartItem={cartItem} />
                        )
                    })
                }
                <span className="total">${ cartTotal }</span>
            </div>
        )
    };
};

Checkout.contextType = CartContext;

export default Checkout;