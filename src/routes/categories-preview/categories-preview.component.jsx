import { Component, Fragment } from "react";
import { connect } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from '../../store/categories/categories.selector';

class CategoriesPreview extends Component {
  render() {
    const categoriesMap = this.props.selectCategoriesMap;
    return (
      <Fragment>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return <CategoryPreview key={title} title={title} products={products}/>
        })}
      </Fragment>
    );
  }
};

export default connect(state => ({selectCategoriesMap: selectCategoriesMap(state)}))(CategoriesPreview);
