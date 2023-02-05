// CEK LAGI
import { Component, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, Title } from './category.styles';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}


class Category extends Component {
    static contextType = CategoriesContext;
    category;
    categoriesMap;
    products;
    
    render() {
        this.category = this.props.params.category;
        this.categoriesMap = this.context.categoriesMap;
        this.products = this.categoriesMap[this.category];
        return (
            <Fragment>
                <Title>{ this.category.toUpperCase() }</Title>
                <CategoryContainer>
                    {
                        this.products && this.products.map((product) => {
                            return (
                                <ProductCard key={product.id} product={product} />
                            )
                        })
                    }
                </CategoryContainer>
            </Fragment>
        );
    }
};

export default withParams(Category);