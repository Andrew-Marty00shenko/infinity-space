import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../../redux/slices/userSlice";
import { connectWallet } from "../../../utils/contract/contract";

import ModalRegister from "../ModalRegister/ModalRegister";

import "./LandingHeader.scss";

const LandingHeader = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [showModalRegister, setShowModalRegister] = useState(false);
    const [uplineId, setUplineId] = useState("");

    useEffect(() => {
        if (searchParams.get('user_id') !== null) {
            setShowModalRegister(true);
            setUplineId(searchParams.get('user_id'));
        } else {
            setUplineId('');
        }
    }, []);

    const handleClickConnectWallet = async () => {
        if (window.web3) {
            const account = await connectWallet();
            setLoading(true);
            if (account) {
                dispatch(loginUser(account)).then(({ payload }) => {
                    if (!payload.response) {
                        setShowModalRegister(true);
                    };

                    setLoading(false);
                });
            }
        } else {
            toast.error('Metamask is not intalled');
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
                <Link to="/">
                    <button
                        onClick={handleClickConnectWallet}
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : ' Connect wallet'}
                    </button>
                </Link>
                {/* {location.pathname === '/' ? (
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
                )} */}
            </div>
        </div>

        <ModalRegister
            showModalRegister={showModalRegister}
            setShowModalRegister={setShowModalRegister}
            uplineId={uplineId}
            setUplineId={setUplineId}
        />

    </header>
}

export default LandingHeader;