import { Modal } from "react-bootstrap";
import "./ConfirmModal.scss";
import InputField from "../../Common/InputField/InputField";

const ConfirmModal = ({ modalShow, setModalShow }) => {
  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="confirm-modal"
    >
      <h2>Enter the code </h2>
      <p>We have sent the code via your E-mail</p>

      <InputField placeholder={"Confirmation code"} />

      <span>Send code again</span>

      <div className="buttons">
        <button onClick={setModalShow}>Ready</button>
        <button onClick={setModalShow}>Cancel</button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
