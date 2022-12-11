import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import { login } from "../../../redux/slices/userSlice";
import { connectWallet } from "../../../utils/contract/contract";

import ModalConnectWallet from "../ModalConnectWallet/ModalConnectWallet";

import "./MainHomeSection.scss";

const MainHomeSection = ({ modalShow, setModalShow, clickedSignIn, clickedSignUp }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const [uplineId, setUplineId] = useState("");

    useEffect(() => {
        if (searchParams.get('user_id') !== null) {
            setUplineId(searchParams.get('user_id'));
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        setModalShow(true);
    }, []);

    const handleClickConnectWallet = async () => {
        const account = await connectWallet();
        navigate('/dashboard');
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
                <button onClick={() => {
                    clickedSignIn ? handleClickConnectWallet() : setModalShow(true)
                }}>
                    Connect wallet
                </button>
            </div>
        </section>
        <ModalConnectWallet
            setModalShow={setModalShow}
            modalShow={modalShow}
            clickedSignIn={clickedSignIn}
            clickedSignUp={clickedSignUp}
            uplineId={uplineId}
            setUplineId={setUplineId}
        />
    </>
}

export default MainHomeSection;