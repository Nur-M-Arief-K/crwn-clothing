import { Component } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

class CartDropdown extends Component {    
    render() {
        const { cartItems } = this.context;
        return (
            <div className="cart-dropdown-container">
                <div className="cart-items" >
                    {
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
                        ))
                    }
                </div>
                <Link to="/checkout">
                    <Button>Go To Checkout</Button>
                </Link>
            </div>
        )
    }
};

CartDropdown.contextType = CartContext;

export default CartDropdown;