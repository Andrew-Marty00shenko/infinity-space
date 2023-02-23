import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { connectWallet } from "../../../utils/contract/contract";
import { loginUser, watch } from "../../../redux/slices/userSlice";

import Metamask from "../../../assets/images/metamask.svg";

import "./ModalRegister.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ModalRegister = ({
  showModalRegister,
  setShowModalRegister,
  uplineId,
  setUplineId,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const loading = useSelector((state) => state.user.loading);

  useEffect(() => {
    if (location.pathname !== "/view") {
      window.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          handleClickWatch();
        }
      });
    }
  }, [uplineId]);

  const handleClickWatch = async () => {
    if (window.web3) {
      const account = await connectWallet();

      if (account) {
        if (uplineId === "") {
          dispatch(watch({ account, uplineId: "1" }));
          localStorage.setItem("uplineId", "1");
        } else {
          dispatch(watch({ account, uplineId }));
          localStorage.setItem("uplineId", uplineId);
        }
      }
    } else {
      toast.error(t("modalRegister:metamask-is-not-installed"));
    }
  };

  return (
    <Modal
      show={showModalRegister}
      onHide={() => setShowModalRegister(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-connect-wallet"
    >
      <svg
        onClick={() => setShowModalRegister(false)}
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
      <img src={Metamask} alt="metamask" />
      <h2>{t("modalRegister:connect-btn")}</h2>
      <p>{t("modalRegister:register-text")}</p>
      <h3>{t("modalRegister:upline-id")}</h3>
      <div>
        <input
          type="number"
          placeholder={t("modalRegister:enter-upline")}
          value={uplineId}
          onChange={(e) => setUplineId(e.target.value)}
        />
        <button onClick={handleClickWatch} disabled={loading}>
          {loading ? "Loading..." : t("modalRegister:connect-btn")}
        </button>
      </div>
    </Modal>
  );
};

export default ModalRegister;
