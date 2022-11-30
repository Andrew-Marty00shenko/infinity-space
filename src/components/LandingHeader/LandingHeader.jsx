import { Link } from "react-router-dom";

import "./LandingHeader.scss";

const LandingHeader = () => {
    return <header className="landing-header">
        <div className="landing-header__block">
            <div className="landing-header__block-info">
                <p>
                    Community
                </p>
                <div className="contract-info">
                    Infinity Space
                    <span>
                        0x2CAa...ae52
                    </span>
                </div>
            </div>
            <div className="landing-header__block-login-btns">
                <Link to="">
                    <button>
                        Log in
                    </button>
                </Link>
                <Link to="">
                    <button>
                        Sign up
                    </button>
                </Link>
            </div>
        </div>
    </header>
}

export default LandingHeader;