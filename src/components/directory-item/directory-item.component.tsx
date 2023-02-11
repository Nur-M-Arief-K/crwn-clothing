import { FC } from "react";

import {
    BackgroundImage,
    Body,
    DirectoryItemContainer,
  } from './directory-item.styles';

type DirectoryItemProps = {
    category: { title: string, imageUrl: string};
};

const DirectoryItem: FC<DirectoryItemProps> = (props) => {
    const {category} = props;
    const {title, imageUrl} = category;
    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;