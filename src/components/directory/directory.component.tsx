import { FC } from "react";

import { Category } from "../../routes/home/home.component";
import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

type DirectoryProps = {
    categories: Category[];
};

const Directory: FC<DirectoryProps> = (props) => {
    const { categories } = props;
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    );
};

export default Directory;