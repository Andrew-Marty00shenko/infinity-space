import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../../redux/slices/userSlice";
import { connectWallet } from "../../../utils/contract/contract";

import ModalConnectWallet from "../ModalConnectWallet/ModalConnectWallet";

import "./MainHomeSection.scss";

const MainHomeSection = () => {
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setModalShow(true);
    }, []);

    const handleClickConnectWallet = async () => {
        const account = await connectWallet();

        dispatch(login(account));
    };

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
                <button onClick={handleClickConnectWallet}>
                    Connect wallet
                </button>
            </div>
        </section>
        <ModalConnectWallet setModalShow={setModalShow} modalShow={modalShow} />
    </>
}

export default MainHomeSection;