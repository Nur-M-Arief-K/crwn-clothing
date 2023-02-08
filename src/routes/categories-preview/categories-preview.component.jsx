import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { selectCategoriesMap, selectIsLoading } from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner.component';
import CategoryPreview from "../../components/category-preview/category-preview.component";

class CategoriesPreview extends Component {
  render() {
    const categoriesMap = this.props.selectCategoriesMap;
    const isLoading = this.props.selectIsLoading;

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
  };
};

export default connect(state => ({selectCategoriesMap: selectCategoriesMap(state), selectIsLoading: selectIsLoading(state)}))(CategoriesPreview);
