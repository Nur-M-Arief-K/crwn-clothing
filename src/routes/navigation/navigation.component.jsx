import { Component } from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"; 
import "./navigation.styles.scss";

class Navigation extends Component {
    render() {
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
                </div>
            </div>
            <Outlet />
        </Fragment>
        )
    }
}

export default Navigation;