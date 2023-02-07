import { Component, Fragment } from "react";
import { connect } from "react-redux";
import {withUseParams} from "../../utils/wrapper/wrapper.utils";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import { CategoryContainer, Title } from "./category.styles";

class Category extends Component {
  render() {
    const category = this.props.params.category;
    const categoriesMap = this.props.selectCategoriesMap;

    const products = categoriesMap[category];
    return (
      <Fragment>
        <Title>{category.toUpperCase()}</Title>
        <CategoryContainer>
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </CategoryContainer>
      </Fragment>
    );
  };
};

export default connect(state => ({selectCategoriesMap: selectCategoriesMap(state)}))(withUseParams(Category));
