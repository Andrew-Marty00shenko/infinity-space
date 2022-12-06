import { Link, useLocation } from "react-router-dom";

import "./LandingHeader.scss";

const LandingHeader = () => {
    const location = useLocation();

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
                            <button>
                                Log in
                            </button>
                        </Link>
                        <Link to="/home-page">
                            <button>
                                Sign up
                            </button>
                        </Link>
                    </>
                ) : (
                    <Link to="/home-page">
                        <button className="connect-btn">
                            Connect wallet
                        </button>
                    </Link>
                )}
            </div>
        </div>
    </header>
}

export default LandingHeader;