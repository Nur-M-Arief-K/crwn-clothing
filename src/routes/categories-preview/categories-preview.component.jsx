import { Component, Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";

class CategoriesPreview extends Component {
  static contextType = CategoriesContext;
  
  render() {
    const { categoriesMap } = this.context;
    return (
      <Fragment>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return <CategoryPreview key={title} title={title} products={products}/>
        })}
      </Fragment>
    );
  };
};

export default CategoriesPreview;
