import { Component } from "react";
import { connect } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

class ProductCard extends Component {
  product = this.props.product;
  cartItems = this.props.selectCartItems;
  addProductToCart = () => this.props.addItemToCart(this.cartItems, this.product);

  render() {
    const { name, price, imageUrl } = this.product;
    this.cartItems = this.props.selectCartItems;

    return (
      <ProductCartContainer>
        <img src={imageUrl} alt={`${name}`} />
        <Footer>
          <Name>{name}</Name>
          <Price>{price}</Price>
        </Footer>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={this.addProductToCart}
        >
          Add to cart
        </Button>
      </ProductCartContainer>
    );
  };
};

export default connect(state => ({selectCartItems: selectCartItems(state)}), {addItemToCart})(ProductCard);
