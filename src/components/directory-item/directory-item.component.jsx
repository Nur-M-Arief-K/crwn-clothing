import { Component } from 'react';
import {
    BackgroundImage,
    Body,
    DirectoryItemContainer,
  } from './directory-item.styles';

class DirectoryItem extends Component {
    render() {
        const {category} = this.props;
        const {title, imageUrl} = category;
        return (
            <DirectoryItemContainer>
                <BackgroundImage imageUrl={imageUrl}/>
                <Body>
                    <h2>{title}</h2>
                    <p>Shop now</p>
                </Body>
            </DirectoryItemContainer>
        )
    }
}

export default DirectoryItem;