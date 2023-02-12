import { useNavigate } from 'react-router';
import {
    BackgroundImage,
    Body,
    DirectoryItemContainer,
  } from './directory-item.styles';

const DirectoryItem = (props) => {
    const {category} = props;
    const {title, imageUrl} = category;
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(`shop/${title}`);
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;