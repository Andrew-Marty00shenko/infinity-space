import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Landing from "../pages/Landing/Landing";

const Public = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!location.pathname.includes('home-page')) {
            navigate('/')
        }
    }, []);

    return <Landing />
}

export default Public;