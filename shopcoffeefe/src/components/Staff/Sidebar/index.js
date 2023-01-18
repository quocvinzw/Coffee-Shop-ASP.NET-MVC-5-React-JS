import { Fragment } from "react"
import { Link } from "react-router-dom";
function Sidebar(props) {
    return (
        <Fragment>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <li>
                    <Link to={props.url} className="sidebar-brand d-flex align-items-center justify-content-center">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink" aria-hidden="true"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">Coffo</div>
                    </Link>
                </li>

                <li>
                    <hr className="sidebar-divider my-0" />
                </li>

                <li className="nav-item active">
                    <Link to={props.url} className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt" aria-hidden="true"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li><hr className="sidebar-divider" /></li>
                {props.children}
                <li><hr className="sidebar-divider" /></li>
            </ul>
        </Fragment>
    )
}

export default Sidebar;