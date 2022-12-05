import { useEffect, useState } from "react";

import ModalConnectWallet from "../ModalConnectWallet/ModalConnectWallet";

import "./MainHomeSection.scss";

const MainHomeSection = () => {
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        setModalShow(true);
    }, []);

    return <>
        <section className="main-home-section">
            <div className="main-home-section__content">
                <h1>
                    <span>
                        Smart DeFi solution
                    </span>
                    <br />
                    Infinity Space <br /> home page
                </h1>
                <h2>
                    Connect wallet to Register or Login
                </h2>
                <button>
                    Connect wallet
                </button>
            </div>
        </section>
        <ModalConnectWallet setModalShow={setModalShow} modalShow={modalShow} />
    </>
}

export default MainHomeSection;