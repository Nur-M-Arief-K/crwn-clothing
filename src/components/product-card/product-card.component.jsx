import { Component } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';

class ProductCard extends Component {
    render() {
        const { product } = this.props;
        const { name, price, imageUrl } = product;
        return (
            <CartContext.Consumer>
                {(cartVal) => {
                    const { addItemToCart } = cartVal;
                    const addProductToCart = () => addItemToCart(product);
                    return (
                        <ProductCartContainer>
                            <img src={imageUrl} alt={`${name}`} />
                            <Footer>
                                <Name>{ name }</Name>
                                <Price>{ price }</Price>
                            </Footer>
                            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
                        </ProductCartContainer>
                    )
                }}
            </CartContext.Consumer>
        );
    };
};

export default ProductCard;