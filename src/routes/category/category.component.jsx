import { useContext, useState, useEffect, Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import { CategoriesContext } from "../../contexts/categories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, Title } from "./category.styles";
import Spinner from "../../components/spinner/spinner.component";

const GET_CATEGORY = gql`
  query ($title: String) {
    getCollectionsByTitle(title: $title) {
      title
      id
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const Category = () => {
  const { category } = useParams();
  const { loading, error, data } = useQuery(GET_CATEGORY, {
    variables: { title: category },
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      const {
        getCollectionsByTitle: { items },
      } = data;
      setProducts(items);
    }
  }, [category, data]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {loading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
