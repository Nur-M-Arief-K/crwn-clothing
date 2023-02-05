import { Component, Fragment } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

class Navigation extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(userVal) => {
          const { currentUser } = userVal;
          return (
            <CartContext.Consumer>
              {(cartVal) => {
                const { isCartOpen } = cartVal;
                return (
                  <Fragment>
                    <NavigationContainer>
                      <LogoContainer to="/">
                        <CrwnLogo />
                      </LogoContainer>
                      <NavLinks>
                        <NavLink className="nav-link" to="/shop">
                          shop
                        </NavLink>
                        {currentUser ? (
                          <NavLink as="span" onClick={signOutUser}>
                            sign out
                          </NavLink>
                        ) : (
                          <NavLink className="nav-link" to="/auth">
                            sign in
                          </NavLink>
                        )}
                        <CartIcon />
                      </NavLinks>
                      {isCartOpen && <CartDropdown />}
                    </NavigationContainer>
                    <Outlet />
                  </Fragment>
                );
              }}
            </CartContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default Navigation;
