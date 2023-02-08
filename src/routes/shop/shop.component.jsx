import { Component } from "react";
import { connect } from "react-redux";
import { fetchCategoriesStart } from "../../store/categories/categories.action";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

class Shop extends Component {
  componentDidMount() {
    this.props.fetchCategoriesStart();
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

export default connect(null, { fetchCategoriesStart })(Shop);
