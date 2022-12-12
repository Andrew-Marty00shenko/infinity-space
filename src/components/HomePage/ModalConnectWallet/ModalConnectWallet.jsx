import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { connectWallet } from '../../../utils/contract/contract';
import { loginUser, watch } from '../../../redux/slices/userSlice';

import Metamask from "../../../assets/images/metamask.svg";

import "./ModalConnectWallet.scss";

const ModalConnectWallet = ({
    modalShow,
    setModalShow,
    clickedSignIn,
    uplineId,
    setUplineId
}) => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.user.loading);

    const handleClickConnectWallet = async () => {
        if (window.web3) {
            const account = await connectWallet();

            if (account) {
                dispatch(loginUser(account));
            }
        } else {
            toast.error('Metamask is not intalled');
        }
    };

    const handleClickWatch = async () => {
        if (uplineId === "") {
            toast.error('Upline Id is required');
        } else {
            if (window.web3) {
                const account = await connectWallet();

                if (account) {
                    dispatch(watch({ account, uplineId }));
                    localStorage.setItem("uplineId", uplineId);
                }
            } else {
                toast.error('Metamask is not intalled');
            }
        }
    };

    return clickedSignIn ? (
        <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal-connect-wallet"
        >
            <svg onClick={() => setModalShow(false)} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L1 13M1 1L13 13" stroke="#717275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <img src={Metamask} alt="metamask" />
            <h2>
                Сonnect wallet
            </h2>
            <p>
                To register/authorize, connect your metamask wallet
            </p>
            <button onClick={handleClickConnectWallet} disabled={loading}>
                {loading ? 'Loading...' : 'Connect wallet'}
            </button>
        </Modal>
    ) : (
        <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal-register"
        >
            <svg onClick={() => setModalShow(false)} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L1 13M1 1L13 13" stroke="#717275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2>
                Your upline ID:
            </h2>
            <input type="number"
                placeholder="Enter upliner ID"
                value={uplineId}
                onChange={e => setUplineId(e.target.value)}
            />
            <button onClick={handleClickWatch}>
                Connect wallet
            </button>
        </Modal >
    )
}

export default ModalConnectWallet;