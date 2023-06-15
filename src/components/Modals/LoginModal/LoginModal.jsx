import { Modal } from "react-bootstrap";
import "./LoginModal.scss";
import InputField from "../../Common/InputField/InputField";

const LoginModal = ({ modalShow, setModalShow }) => {
  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="login-modal"
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
          stroke="#AE7AFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="email">
        <InputField
          name={"email"}
          type="text"
          placeholder={"email/phone number"}
        />
      </div>
      <div className="password">
        <InputField
          name={"password"}
          type="password"
          placeholder={"password"}
        />
      </div>
      <div className="forgot-password">
        <span>forgot your password?</span>
      </div>
      <div className="buttons">
        <button onClick={() => setModalShow(false)}>Log in</button>
        <button onClick={() => setModalShow(false)}>Sign up</button>
      </div>
    </Modal>
  );
};

export default LoginModal;
