import { Component, Fragment } from "react";
import { connect } from "react-redux";
import {withUseParams} from "../../utils/wrapper/wrapper.utils";
import ProductCard from "../../components/product-card/product-card.component";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/categories.selector";
import Spinner from "../../components/spinner/spinner.component";
import { CategoryContainer, Title } from "./category.styles";

class Category extends Component {
  render() {
    const category = this.props.params.category;
    const categoriesMap = this.props.selectCategoriesMap;
    const products = categoriesMap[category];
    const isLoading = this.props.selectIsLoading;
    return (
      <Fragment>
        <Title>{category.toUpperCase()}</Title>
        {isLoading ? (
          <Spinner />
        ) : (
          <CategoryContainer>
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </CategoryContainer>
        )}
      </Fragment>
    );
  };
};

export default connect(state => ({selectCategoriesMap: selectCategoriesMap(state), selectIsLoading: selectIsLoading(state)}))(withUseParams(Category));
