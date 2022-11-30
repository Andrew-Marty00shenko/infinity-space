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

        <div className="landing-header__mobile">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H19M1 1H19M7 13H19" stroke="#717275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    </header>
}

export default LandingHeader;