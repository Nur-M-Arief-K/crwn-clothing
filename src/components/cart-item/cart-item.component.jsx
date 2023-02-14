import { memo } from "react";
import { CartItemContainer, ItemDetails } from './cart-item.styles';

const CartItem = memo((props) => {
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
    );
});

export default CartItem;