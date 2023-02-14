import { render } from "@testing-library/react";
import CartItem from "./cart-item.component";

describe("CartItem tests", () => {
    test("it should render correct information of given props", () => {
        const cartItemMock = {
                id: 1,
                name: "cool hat",
                price: 2,
                imageUrl: "https://mock-url.com/",
                quantity: 1,
        };

        expect(render(<CartItem cartItem={cartItemMock} />)).toMatchSnapshot();
    });
});