import { Component } from "react";
import { CartItemContainer, ItemDetails } from './cart-item.styles';

class CartItem extends Component {
    render() {
        const { cartItem } = this.props;
        const { price, name, imageUrl, quantity } = cartItem;
        return (
            <CartItemContainer>
                <img src={imageUrl} alt={`${name}`} />
                <ItemDetails>
                    <span className="name">{ name }</span>
                    <span className="price">{ quantity } x { price }</span>
                </ItemDetails>
            </CartItemContainer>
        );
    };
};

export default CartItem;