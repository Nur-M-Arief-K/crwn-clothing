import { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";

import { signOutStart } from "../../store/user/user.action";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

class Navigation extends Component {
  render() {
    const currentUser = this.props.selectCurrentUser;
    const isCartOpen = this.props.selectIsCartOpen;
    const signOutUser = () => this.props.signOutStart();
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
  };
};

export default connect(state => ({selectCurrentUser: selectCurrentUser(state), selectIsCartOpen: selectIsCartOpen(state)}), {signOutStart})(Navigation);
