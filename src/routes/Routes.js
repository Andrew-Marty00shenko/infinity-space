import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Public from "./Public";
import Private from "./Private";

const Routes = () => {
    const wallet = useSelector(state => state.user.wallet);
    const navigate = useNavigate();

    useEffect(() => {
        if (wallet === null) {
            navigate('/');
        }
    }, []);

    return wallet !== null ? <Private /> : <Public />
}

export default Routes;