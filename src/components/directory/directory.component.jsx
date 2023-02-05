import { Component } from "react";
import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles";

class Directory extends Component {
    render() {
        const { categories } = this.props;
        return (
            <DirectoryContainer>
                {categories.map((category) => (
                    <DirectoryItem key={category.id} category={category} />
                ))}
            </DirectoryContainer>
        );
    };
};

export default Directory;