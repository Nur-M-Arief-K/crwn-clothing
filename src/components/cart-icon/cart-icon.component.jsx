import { Component } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ItemCount } from './cart-icon.styles';

class CartIcon extends Component {
    static contextType = CartContext;
    render() {
        const {isCartOpen, setIsCartOpen, cartCount} = this.context;
        const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
        return (
            <CartIconContainer onClick={toggleIsCartOpen}>
                <ShoppingIcon />
                <ItemCount>{ cartCount }</ItemCount>
            </CartIconContainer>
        );
    }
};

export default CartIcon;