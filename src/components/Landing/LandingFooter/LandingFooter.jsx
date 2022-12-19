import { useState } from "react";

import PrivacyPolicyModal from "../PrivacyPolicyModal/PrivacyPolicyModal";

import Logo from "../../../assets/images/logo.png";
import QrCode from "../../../assets/images/qr-code.png";

import "./LandingFooter.scss"

const LandingFooter = () => {
    const [show, setShow] = useState(false);

    return <footer className="landing-footer">
        <div className="landing-footer__top">
            <div className="block__logo">
                <img src={QrCode} alt="logo" />
            </div>

            <div className="info">
                <div className="info-contract">
                    Infinity Space
                    <span>
                        0xB1Bc...0dbf
                    </span>
                </div>
                <div className="info-links">
                    <a href="https://t.me/Infinity_Space_Notifications_bot" target="_blank">
                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.6651 0.71682L0.935095 7.55382C-0.274905 8.03982 -0.267905 8.71482 0.713095 9.01582L5.26509 10.4358L15.7971 3.79082C16.2951 3.48782 16.7501 3.65082 16.3761 3.98282L7.8431 11.6838H7.84109L7.8431 11.6848L7.5291 16.3768C7.9891 16.3768 8.19209 16.1658 8.45009 15.9168L10.6611 13.7668L15.2601 17.1638C16.1081 17.6308 16.7171 17.3908 16.9281 16.3788L19.9471 2.15082C20.2561 0.91182 19.4741 0.35082 18.6651 0.71682Z" fill="white" />
                        </svg>
                    </a>
                    <a href="https://twitter.com/InSpace_Web3" target="_blank">
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5 2.99987L19.25 3.37487L20.75 1.49987L18.125 2.24987C14.75 -1.50013 9.5 2.62487 11 5.99987C5 5.99987 2 1.49987 2 1.49987C2 1.49987 -0.25 4.87487 3.5 7.49987L1.25 6.74987C1.25 8.99987 2.75 10.4999 5.375 11.2499H2.75C4.25 14.2499 6.875 14.2499 6.875 14.2499C6.875 14.2499 4.625 16.1249 0.5 16.1249C12.875 22.1249 20.375 10.8749 19.25 4.87487L21.5 2.99987Z" fill="white" />
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/@Infinity-Space" target="_blank">
                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.4959 3.20321C23.3565 2.70501 23.0909 2.25124 22.7247 1.88583C22.3585 1.52042 21.9041 1.25575 21.4056 1.11746C19.5344 0.617211 12.0119 0.617212 12.0119 0.617212C12.0119 0.617212 4.50364 0.605211 2.61289 1.11746C2.11519 1.25636 1.66173 1.5213 1.29636 1.88668C0.930981 2.25206 0.666039 2.70551 0.527139 3.20321C0.171789 5.11888 -0.00322689 7.06363 0.00438858 9.01196C0.000921258 10.9509 0.175909 12.8861 0.527139 14.793C0.666488 15.2909 0.931509 15.7447 1.29676 16.1108C1.66201 16.4768 2.11522 16.7428 2.61289 16.8832C4.48414 17.3835 12.0119 17.3835 12.0119 17.3835C12.0119 17.3835 19.5156 17.3835 21.4056 16.8832C21.9041 16.7434 22.3582 16.4777 22.7243 16.1116C23.0903 15.7455 23.3561 15.2914 23.4959 14.793C23.8401 12.8872 24.0081 10.9492 23.9961 9.01196C24.0081 7.06196 23.8439 5.12096 23.4959 3.20321ZM9.60889 12.6022V5.40596L15.8706 9.01196L9.60889 12.6022Z" fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div className="landing-footer__line">
            <div>
                Infinity Space
                <span>
                    0xB1Bc...0dbf
                </span>
            </div>
        </div>
        <div className="landing-footer__bottom">
            <p>
                © 2022 All Rights Reserved
            </p>
            <div className="info">
                <a href="">
                    Terms Of Use
                </a>
                <span onClick={() => setShow(true)}>
                    Privacy Policy
                </span>
            </div>
        </div>

        <PrivacyPolicyModal show={show} setShow={setShow} />
    </footer>
}

export default LandingFooter;