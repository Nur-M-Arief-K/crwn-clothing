// CEK LAGI
import { Component, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { withRouter } from "react-router";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, Title } from './category.styles';

class Category extends Component {
    static contextType = CategoriesContext;
    category;
    categoriesMap;

    constructor() {
        super();
        this.category = this.props.match.params.category;
        this.categoriesMap = this.context.categoriesMap;
        this.state = {
            products: this.categoriesMap[this.category]
        }
    }
    
    render() {
        // const { category } = this.props.match.params;
        // const { categoriesMap } = this.context;
        // const [products, setProducts] = useState(categoriesMap[category]);
        // useEffect(() => {
        //     setProducts(categoriesMap[category]);
        // }, [category, categoriesMap]);
    
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

export default withRouter(Category);