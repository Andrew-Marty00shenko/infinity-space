import { Modal } from 'react-bootstrap';

import Metamask from "../../../assets/images/metamask.svg";

import "./ModalConnectWallet.scss";

const ModalConnectWallet = ({ modalShow, setModalShow }) => {
    return <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-connect-wallet"
    >
        <svg onClick={() => setModalShow(false)} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L1 13M1 1L13 13" stroke="#717275" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <img src={Metamask} alt="metamask" />
        <h2>
            Сonnect wallet
        </h2>
        <p>
            To register/authorize, connect your metamask wallet
        </p>
        <button>
            Connect wallet
        </button>
    </Modal>
}

export default ModalConnectWallet;