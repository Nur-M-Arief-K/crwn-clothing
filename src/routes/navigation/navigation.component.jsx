import { Component, Fragment } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import "./navigation.styles.scss";

class Navigation extends Component {
  render() {
    return (
        <UserContext.Consumer>
            {(userVal) => {
                const { currentUser } = userVal;
                return (<CartContext.Consumer>
                    {(cartVal) => {
                        const { isCartOpen } = cartVal;
                        return (
                            <Fragment>
                                <div className="navigation">
                                    <Link className="logo-container" to="/">
                                    <CrwnLogo className="logo" />
                                    </Link>
                                    <div className="nav-links-container">
                                    <Link className="nav-link" to="/shop">
                                        shop
                                    </Link>
                                    {currentUser ? (
                                        <span className="nav-link" onClick={signOutUser}>
                                        sign out
                                        </span>
                                    ) : (
                                        <Link className="nav-link" to="/auth">
                                        sign in
                                        </Link>
                                    )}
                                    <CartIcon />
                                    </div>
                                    {isCartOpen && <CartDropdown />}
                                </div>
                                <Outlet />
                            </Fragment>
                        )
                    }}
                </CartContext.Consumer>)
            }}
        </UserContext.Consumer>
    );
  }
}

export default Navigation;
