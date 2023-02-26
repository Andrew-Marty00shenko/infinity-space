import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import Crystal from "../../../assets/images/crystal.png";

import "./PrivacyPolicyModal.scss";

const PrivacyPolicyModal = ({ show, setShow }) => {
  const { t } = useTranslation();

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby="example-custom-modal-styling-title"
      className="privacy-policy-modal"
    >
      <div className="close-btn">
        <svg
          onClick={() => setShow(false)}
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 1L1 25M1 1L25 25"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h2>{t("privacyPolicy:title")}</h2>

      <div className="update">
        {t("privacyPolicy:updated")}
        <div>12/09/2022</div>
      </div>

      <div className="text">
        {t("privacyPolicy:t-1")}
        <br />
        {t("privacyPolicy:t-2")}
        <br />
        {t("privacyPolicy:t-3")} <br />
        {t("privacyPolicy:t-4")} <br />
        {t("privacyPolicy:t-5")} <br />
        {t("privacyPolicy:t-6")} <br />
        {t("privacyPolicy:t-7")} <br />
        {t("privacyPolicy:t-8")}
      </div>

      <h3>{t("privacyPolicy:text-2")}</h3>

      <div className="text">
        {t("privacyPolicy:text-3")} <br /> {t("privacyPolicy:text-3-1")}
      </div>

      <h3 style={{ marginTop: 40 }}>{t("privacyPolicy:defenitions")}</h3>

      <div className="block">
        <div>
          <img src={Crystal} alt="crystal" />
          {t("privacyPolicy:text-4")}
        </div>
        <div>
          <img src={Crystal} alt="crystal" />
          {t("privacyPolicy:text-5")} <br />
          {t("privacyPolicy:text-5-1")} <br />
          {t("privacyPolicy:text-5-2")}
        </div>
      </div>

      <h3 style={{ marginTop: 40 }}>{t("privacyPolicy:types-data")}</h3>

      <h3 style={{ marginTop: 24, fontSize: 28 }} className="personal">
        {t("privacyPolicy:personal-data")}
      </h3>

      <div className="text">
        {t("privacyPolicy:text-6")} <br />
        {t("privacyPolicy:text-6-1")} <br />
        {t("privacyPolicy:text-6-2")}
      </div>

      <div className="block">
        <div>
          <img src={Crystal} alt="crystal" />
          {t("privacyPolicy:email")}
        </div>
        <div>
          <img src={Crystal} alt="crystal" />
          {t("privacyPolicy:name")}
        </div>
        <div>
          <img src={Crystal} alt="crystal" />
          {t("privacyPolicy:cookies")}
        </div>
      </div>

      <h3 style={{ marginTop: 40, fontSize: 28 }} className="personal">
        {t("privacyPolicy:usage-data")}
      </h3>

      <div className="text">
        {t("privacyPolicy:text-7")} <br />
        {t("privacyPolicy:text-7-1")} <br />
        {t("privacyPolicy:text-7-2")} <br />
        {t("privacyPolicy:text-7-3")}
      </div>

      <h3 style={{ marginTop: 40, fontSize: 28 }} className="personal">
        {t("privacyPolicy:text-8")}
      </h3>

      <div className="text">
        {t("privacyPolicy:text-9")}
        <br />
        <br />
        {t("privacyPolicy:text-10")}.
        <br />
        <br />
        {t("privacyPolicy:text-11")} <br />
        {t("privacyPolicy:text-11-1")} <br />
        {t("privacyPolicy:text-11-2")}
        <br />
        <br />
        {t("privacyPolicy:text-12")} <br />
        {t("privacyPolicy:text-12-1")}
      </div>
    </Modal>
  );
};

export default PrivacyPolicyModal;
