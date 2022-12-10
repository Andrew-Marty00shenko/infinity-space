import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";


import "./Sidebar.scss";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
    const location = useLocation();

    return <div className={classNames("sidebar-admin", {
        "sidebar-admin--closed": !showSidebar
    })}>
        <div className="sidebar-admin__close-btn" onClick={() => setShowSidebar(!showSidebar)}>
            <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L1 13M1 1L13 13" stroke="#AFC6FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>

        <ul className="sidebar-admin__menu">
            <Link to="/admin" onClick={() => setShowSidebar(false)}>
                <li className={classNames({ "active": location.pathname === "/admin" })}>
                    White list
                </li>
            </Link>
            <Link to="/admin/add-content" onClick={() => setShowSidebar(false)}>
                <li className={classNames({ "active": location.pathname === "/admin/add-content" })}>
                    Web3 academy
                </li>
            </Link>
        </ul>
    </div>
};

export default Sidebar;