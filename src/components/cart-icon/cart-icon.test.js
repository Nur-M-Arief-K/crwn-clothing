import { renderWithProviders } from "../../utils/test/test.utils";
import CartIcon from "./cart-icon.component";

test("should match the snapshot", () => {
    expect(renderWithProviders(<CartIcon />)).toMatchSnapshot();
});