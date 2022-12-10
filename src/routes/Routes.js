import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import Public from "./Public";
import Private from "./Private";
import Admin from "../pages/Admin/Admin";

const Routes = () => {
    const wallet = useSelector(state => state.user.wallet);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (wallet === null && !location.pathname.includes('admin')) {
            navigate('/');
        }
    }, []);

    return location.pathname.includes('admin')
        ? <Admin />
        : wallet !== null
            ? <Private />
            : <Public />
}

export default Routes;