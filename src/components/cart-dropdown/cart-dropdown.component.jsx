import { Component } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

class CartDropdown extends Component {
    render() {
        const { cartItems } = this.context;
        const goToCheckoutHandler = () => {
            this.props.navigation.navigate("/checkout");
        };
        return (
            <div className="cart-dropdown-container">
                <div className="cart-items" >
                    {
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
                        ))
                    }
                </div>
                <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
            </div>
        )
    }
};

CartDropdown.contextType = CartContext;

export default CartDropdown;