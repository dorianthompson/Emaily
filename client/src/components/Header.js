import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

const Header = () => {
    return (
        <Fragment>
            <nav>
                <div className="nav-wrapper">
                    <Link to='/' className="left brand-logo">
                        Emaily
                    </Link>
                    <ul className="right">
                        <li>
                            <a>Login With Google</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </Fragment>
    );
};

export default Header;