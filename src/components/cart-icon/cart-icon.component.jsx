import { Component } from "react";
import { connect } from "react-redux";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

class CartIcon extends Component {
  render() {
    const isCartOpen = this.props.selectIsCartOpen;
    const cartCount = this.props.selectCartCount;
    const toggleIsCartOpen = () => this.props.setIsCartOpen(!isCartOpen);
    return (
      <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon className="shopping-icon" />
        <ItemCount>{cartCount}</ItemCount>
      </CartIconContainer>
    );
  };
};

export default connect( state => ({ selectIsCartOpen: selectIsCartOpen(state), selectCartCount: selectCartCount(state) }), {setIsCartOpen})(CartIcon);
