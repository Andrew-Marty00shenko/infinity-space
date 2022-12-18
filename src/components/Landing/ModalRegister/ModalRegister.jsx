import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { connectWallet } from '../../../utils/contract/contract';
import { loginUser, watch } from '../../../redux/slices/userSlice';

import Metamask from "../../../assets/images/metamask.svg";

import "./ModalRegister.scss";

const ModalRegister = ({
    showModalRegister,
    setShowModalRegister,
    uplineId,
    setUplineId
}) => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.user.loading);

    const handleClickWatch = async () => {
        if (window.web3) {
            const account = await connectWallet();

            if (account) {
                if (uplineId === '') {
                    dispatch(watch({ account, uplineId: "1" }));
                    localStorage.setItem("uplineId", "1");
                } else {
                    dispatch(watch({ account, uplineId }));
                    localStorage.setItem("uplineId", uplineId);
                }
            }
        } else {
            toast.error('Metamask is not intalled');
        }
    };

    return <Modal
        show={showModalRegister}
        onHide={() => setShowModalRegister(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-connect-wallet"
    >
        <svg onClick={() => setShowModalRegister(false)} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L1 13M1 1L13 13" stroke="#717275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <img src={Metamask} alt="metamask" />
        <h2>
            Сonnect wallet
        </h2>
        <p>
            To register, connect your metamask wallet
        </p>
        <h3>
            Your upline ID: (optional)
        </h3>
        <div>
            <input type="number"
                placeholder="Enter upliner ID"
                value={uplineId}
                onChange={e => setUplineId(e.target.value)}
            />
            <button
                onClick={handleClickWatch}
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Connect wallet'}
            </button>
        </div>
    </Modal >
}

export default ModalRegister;