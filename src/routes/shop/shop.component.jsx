import { Component } from "react";
import { connect } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/categories.action";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

class Shop extends Component {
  getCategoriesMap = async () => {
    const categories = await getCategoriesAndDocuments("categories");
    this.props.setCategories(categories);
  };

  componentDidMount() {
    this.getCategoriesMap();
  }

  render() {
    return (
      <Routes>
        <Route index element={<CategoriesPreview />}></Route>
        <Route path=":category" element={<Category />}></Route>
      </Routes>
    );
  };
};

export default connect(null, { setCategories })(Shop);
