import { Modal } from "react-bootstrap";
import "./RegisterModal.scss";
import InputField from "../../Common/InputField/InputField";
import CheckboxField from "../../Common/CheckboxField.jsx/CheckboxField";
import BoyImage from "../../../assets/images/boy.png";
import { useState } from "react";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

const RegisterModal = ({ modalShow, setModalShow }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="register-modal"
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
        <div>
          <InputField
            label={"Email"}
            name={"email"}
            type="text"
            placeholder={"Email"}
          />
          <InputField
            label={"Password"}
            name={"password"}
            type="password"
            placeholder={"Password"}
          />
        </div>

        <div>
          <InputField
            label={"Phone number"}
            name={"phone"}
            type="text"
            placeholder={"+...(...) ... .. .. "}
          />
          <InputField
            label={"Confirm password"}
            name={"confirm_password"}
            type="password"
            placeholder={"Confirm password"}
          />
        </div>
        <div>
          <InputField
            label={"Name and Family name"}
            name={"name"}
            type="text"
            placeholder={"Averon Jackson"}
          />
          <InputField
            label={"Date of birth"}
            name={"date_of_birth"}
            type="text"
            placeholder={"02/09/1999"}
          />
        </div>

        <div>
          <InputField
            label={"Time of birth"}
            name={"time_of_birth"}
            type="text"
            placeholder={"14:00"}
          />

          <div style={{ margin: 0 }}>
            <label>Sex</label>
            <div className="d-flex flex-row">
              <CheckboxField label={"Male"} />
              <CheckboxField label={"Female"} />
            </div>
          </div>
        </div>

        <div>
          <InputField
            label={"Place of birth"}
            name={"place_of_birth"}
            type="text"
            placeholder={"Ukraine"}
          />
          <InputField
            label={"City of birth"}
            name={"city_of_birth"}
            type="text"
            placeholder={"Kyiv"}
          />
        </div>

        <div className="images">
          <img src={BoyImage} alt="" />
          <svg
            width="544"
            height="127"
            viewBox="0 0 544 127"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="497.774"
              cy="76.916"
              rx="3.40608"
              ry="2.37746"
              fill="white"
              fill-opacity="0.5"
            />
            <ellipse
              cx="87.5845"
              cy="41.6502"
              rx="0.973166"
              ry="0.396243"
              fill="white"
            />
            <ellipse
              cx="13.6245"
              cy="25.8005"
              rx="0.973166"
              ry="0.396243"
              fill="white"
            />
            <ellipse
              cx="454.954"
              cy="1.23365"
              rx="0.486583"
              ry="0.396243"
              fill="white"
            />
            <ellipse
              cx="440.844"
              cy="124.069"
              rx="1.94633"
              ry="1.98122"
              fill="white"
              fill-opacity="0.5"
            />
            <ellipse
              cx="1.45975"
              cy="93.1619"
              rx="1.45975"
              ry="1.98122"
              fill="white"
            />
            <path
              d="M124.079 46.8013L126.05 51.1396L131.378 52.7449L126.05 54.3502L124.079 58.6886L122.108 54.3502L116.78 52.7449L122.108 51.1396L124.079 46.8013Z"
              fill="white"
            />
            <path
              d="M404.838 4.00732L407.729 10.3702L415.542 12.7247L407.729 15.0792L404.838 21.442L401.946 15.0792L394.133 12.7247L401.946 10.3702L404.838 4.00732Z"
              fill="white"
              fill-opacity="0.3"
            />
            <path
              d="M61.3097 99.1055L62.8868 102.576L67.1487 103.86L62.8868 105.145L61.3097 108.615L59.7326 105.145L55.4707 103.86L59.7326 102.576L61.3097 99.1055Z"
              fill="white"
              fill-opacity="0.3"
            />
            <path
              d="M538.161 46.8013L539.738 50.2719L544 51.5562L539.738 52.8404L538.161 56.3111L536.584 52.8404L532.322 51.5562L536.584 50.2719L538.161 46.8013Z"
              fill="white"
              fill-opacity="0.3"
            />
          </svg>
        </div>
        <div className="save-account">
          <input id="save" type="checkbox" />
          <label htmlFor="save">Save account</label>
        </div>
        <div className="buttons">
          <button onClick={() => setShowConfirm(true)}>Sign up</button>
        </div>
      </Modal>

      <ConfirmModal
        modalShow={showConfirm}
        setModalShow={() => setShowConfirm(false)}
      />
    </>
  );
};

export default RegisterModal;
