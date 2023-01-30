import { Component, Fragment } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";

class Navigation extends Component {
  signOutHandler = async () => {
    const { setCurrentUser } = this.context;
    await signOutUser();
    setCurrentUser(null);
  };

  render() {
    const { currentUser } = this.context;
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
              <span className="nav-link" onClick={this.signOutHandler}>
                sign out
              </span>
            ) : (
              <Link className="nav-link" to="/auth">
                sign in
              </Link>
            )}
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
  }
}

Navigation.contextType = UserContext;

export default Navigation;
