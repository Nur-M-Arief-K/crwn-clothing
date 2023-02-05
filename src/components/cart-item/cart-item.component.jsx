import { CartItemContainer, ItemDetails } from './cart-item.styles';

const CartItem = (props) => {
    const { cartItem } = props;
    const { price, name, imageUrl, quantity } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <span className="name">{ name }</span>
                <span className="price">{ quantity } x { price }</span>
            </ItemDetails>
        </CartItemContainer>
    )
};

export default CartItem;