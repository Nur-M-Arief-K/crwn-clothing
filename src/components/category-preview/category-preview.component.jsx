import { Component } from "react";
import ProductCard from "../product-card/product-card.component";
import {
    CategoryPreviewContainer,
    Title,
    Preview,
  } from './category-preview.styles';

class CategoryPreview extends Component {
    render() {
        const { title, products } = this.props;
        return (
            <CategoryPreviewContainer>
                <h2>
                    <Title to={title}>{ title.toUpperCase() }</Title>
                </h2>
                <Preview>
                    {
                        products.filter((_, idx) => idx < 4)
                        .map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </Preview>
            </CategoryPreviewContainer>
        )
    }
};

export default CategoryPreview;