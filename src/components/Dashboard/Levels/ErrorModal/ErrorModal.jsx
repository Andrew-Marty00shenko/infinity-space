import { Modal } from 'react-bootstrap';

import ErrorImage from "../../../../assets/images/error.png";

import "./ErrorModal.scss";

const ErrorModal = ({ modalShow, setModalShow }) => {
    return <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="error-modal"
    >
        <svg onClick={() => setModalShow(false)} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L1 13M1 1L13 13" stroke="#717275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <img src={ErrorImage} alt="error" />
        <h2>
            Attantion!
        </h2>
        <p>
            To activate level 5, you must have activated level 4.
        </p>
        <button onClick={() => setModalShow(false)} >
            Close
        </button>
    </Modal>
}

export default ErrorModal;