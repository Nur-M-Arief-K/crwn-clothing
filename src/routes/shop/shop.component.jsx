import { Component } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

class Shop extends Component {
    render() {
        return (
            <ProductsContext.Consumer>
                {(productsVal) => {
                    const { products } = productsVal;
                    <div className="products-container">
                        {products.map(product => {
                            const { id } = product;
                            return (
                                <ProductCard key={id} product={product}></ProductCard>
                            )
                        })}
                    </div>
                }}
            </ProductsContext.Consumer>
        )
    }
};

export default Shop;