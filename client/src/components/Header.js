import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { connect } from "react-redux";

const Header = (props) => {

    const { auth } = props;

    const renderContent = () => {
        switch(auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login With Google</a>
                    </li>
                );
            default:
                return (
                    <li>
                        <a href="/api/logout">Logout</a>
                    </li>
                );
        }
    }

    return (
        <Fragment>
            <nav>
                <div className="nav-wrapper">
                    <Link 
                        to={auth ? '/surveys' : '/'} 
                        className="left brand-logo"
                    >
                        Emaily
                    </Link>
                    <ul className="right">
                        {renderContent()}
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </Fragment>
    );
};

const mapStateToProps = ({ auth }) => {
    return { auth };
}


export default connect(mapStateToProps)(Header);