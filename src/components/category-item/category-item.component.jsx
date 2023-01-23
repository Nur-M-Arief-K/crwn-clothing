import { Component } from "react";
import "./category-item.styles.scss";

class CategoryItem extends Component {
    render() {
        const {category} = this.props;
        const {title, imageUrl} = category;
        return (
            <div className="category-container">
                <div className="background-image" style={{
                    backgroundImage: `url(${imageUrl})`
                }}/>
                <div className="category-body-container">
                    <h2>{title}</h2>
                    <p>Shop now</p>
                </div>
            </div>
        )
    }
}

export default CategoryItem;