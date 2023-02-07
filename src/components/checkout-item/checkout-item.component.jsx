import { Component } from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

class CheckoutItem extends Component {
  cartItem = this.props.cartItem;
  cartItems = this.props.selectCartItems;

  clearItemHandler = () =>
    this.props.clearItemFromCart(this.cartItems, this.cartItem);
  addItemHandler = () => this.props.addItemToCart(this.cartItems, this.cartItem);
  removeItemHandler = () =>
    this.props.removeItemFromCart(this.cartItems, this.cartItem);

  render() {
    this.cartItems = this.props.selectCartItems;
    this.cartItem = this.props.cartItem;
    const { name, imageUrl, price, quantity } = this.cartItem;
    return (
      <CheckoutItemContainer>
        <ImageContainer>
          <img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <BaseSpan>{name}</BaseSpan>
        <Quantity>
          <Arrow onClick={this.removeItemHandler}>&#10094;</Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={this.addItemHandler}>&#10095;</Arrow>
        </Quantity>
        <BaseSpan>{price}</BaseSpan>
        <RemoveButton onClick={this.clearItemHandler}>&#10005;</RemoveButton>
      </CheckoutItemContainer>
    );
  }
}

export default connect(
  (state) => ({ selectCartItems: selectCartItems(state) }),
  { clearItemFromCart, addItemToCart, removeItemFromCart }
)(CheckoutItem);
