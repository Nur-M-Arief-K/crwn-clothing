import { Component } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./product-card.styles.scss";
import Button from "../button/button.component";

class ProductCard extends Component {
    render() {
        const { product } = this.props;
        const { name, price, imageUrl } = product;
        return (
            <CartContext.Consumer>
                {(cartVal) => {
                    const { addItemToCart } = cartVal;
                    const addProductToCart = () => addItemToCart(product);
                    <div className="product-card-container">
                        <img src={imageUrl} alt={`${name}`} />
                        <div className="footer">
                            <span className="name">{ name }</span>
                            <span className="price">{ price }</span>
                        </div>
                        <Button buttonType="inverted" onClick={addProductToCart}>Add to cart</Button>
                    </div>
                }}
            </CartContext.Consumer>
        )
    }
}

export default ProductCard;