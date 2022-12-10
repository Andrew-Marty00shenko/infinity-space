import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../../../redux/slices/userSlice";

import "./LandingHeader.scss";

const LandingHeader = ({ setClickedSignIn, setClickedSignUp, clickedSignIn, setModalShow }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClickConnectWallet = async () => {
        const account = await connectWallet();
        navigate('/dashboard');
        dispatch(login(account));
    };

    const connectWallet = () => {
        if (clickedSignIn) {
            handleClickConnectWallet();
        } else {
            setModalShow(true);
        }
    };

    return <header className="landing-header">
        <div className="landing-header__block">
            <div className="landing-header__block-info">
                {location.pathname === '/' ? (
                    <>
                        <p>
                            Community
                        </p>
                        <div className="contract-info">
                            Infinity Space
                            <span>
                                0x2CAa...ae52
                            </span>
                        </div>
                    </>
                ) : null}
            </div>
            <div className="landing-header__block-login-btns">
                {location.pathname === '/' ? (
                    <>
                        <Link to="/home-page">
                            <button onClick={() => setClickedSignIn(true)}>
                                Log in
                            </button>
                        </Link>
                        <Link to="/home-page">
                            <button onClick={() => setClickedSignUp(true)}>
                                Sign up
                            </button>
                        </Link>
                    </>
                ) : (
                    <Link to="/home-page" >
                        <button className="connect-btn" onClick={connectWallet}>
                            Connect wallet
                        </button>
                    </Link>
                )}
            </div>
        </div>
    </header>
}

export default LandingHeader;