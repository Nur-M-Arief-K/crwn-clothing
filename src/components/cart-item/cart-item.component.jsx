import { Component } from "react";

import "./cart-item.styles.scss";

class CartItem extends Component {
    render() {
        const { cartItem } = this.props;
        const { price, name, imageUrl, quantity } = cartItem;
        return (
            <div className="cart-item-container">
                <img src={imageUrl} alt={`${name}`} />
                <div className="item-details">
                    <span className="name">{ name }</span>
                    <span className="price">{ quantity } x { price }</span>
                </div>
            </div>
        )
    }
};

export default CartItem;