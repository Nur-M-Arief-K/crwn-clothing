import { Component, createContext } from "react";
import { getCategoresAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export class CategoriesProvider extends Component {
  getCategoriesMap = async () => {
    const categoryMap = await getCategoresAndDocuments();
    this.setState({ categoriesMap: categoryMap });
  };

  constructor() {
    super();
    this.state = {
      categoriesMap: {},
    };
  }

  componentDidMount() {
    this.getCategoriesMap();
  }

  render() {
    const categoriesMap = this.state.categoriesMap;
    const value = {
      categoriesMap,
    };

    return (
      <CategoriesContext.Provider value={value}>
        {this.props.children}
      </CategoriesContext.Provider>
    );
  }
}
