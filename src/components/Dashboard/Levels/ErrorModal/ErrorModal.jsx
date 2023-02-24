import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import ErrorImage from "../../../../assets/images/error.png";

import "./ErrorModal.scss";

const ErrorModal = ({ modalShow, setModalShow }) => {
  const { t } = useTranslation();

  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="error-modal"
    >
      <svg
        onClick={() => setModalShow(false)}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 1L1 13M1 1L13 13"
          stroke="#717275"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <img src={ErrorImage} alt="error" />
      <h2>{t("global:attention")}</h2>
      <p>{t("global:attention-text")}</p>
      <button onClick={() => setModalShow(false)}>
        {t("global:attention-close")}
      </button>
    </Modal>
  );
};

export default ErrorModal;
