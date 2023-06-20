import { Modal } from "react-bootstrap";
import "./EditProfileModal.scss";
import BoyImage from "../../../assets/images/boy.png";
import InputField from "../../Common/InputField/InputField";

const EditProfileModal = ({ modalShow, setModalShow }) => {
  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="edit-profile-modal"
    >
      <svg
        className="close"
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

      <div className="title">
        <h3>
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0H8C4.22876 0 2.34315 0 1.17157 1.17157C0.328032 2.01511 0.0918467 3.22882 0.0257164 5.25H19.9743C19.9082 3.22882 19.672 2.01511 18.8284 1.17157C17.6569 0 15.7712 0 12 0Z"
              fill="#184BFF"
            />
            <path
              d="M8 16H12C15.7712 16 17.6569 16 18.8284 14.8284C20 13.6569 20 11.7712 20 8C20 7.55807 20 7.14203 19.9981 6.75H0.00188529C0 7.14203 0 7.55807 0 8C0 11.7712 0 13.6569 1.17157 14.8284C2.34315 16 4.22876 16 8 16Z"
              fill="#184BFF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H8C8.41421 11.25 8.75 11.5858 8.75 12C8.75 12.4142 8.41421 12.75 8 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.75 12C9.75 11.5858 10.0858 11.25 10.5 11.25H12C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75H10.5C10.0858 12.75 9.75 12.4142 9.75 12Z"
              fill="white"
            />
          </svg>
          Edit your personal information
        </h3>

        <p>We will generate your avatar using your information</p>
      </div>

      <div className="fields">
        <div>
          <InputField
            label={"Name and Family name"}
            placeholder={"Aaron jackson"}
          />
          <InputField label={"Date of birth"} placeholder={"Aaron jackson"} />
          <InputField label={"Time of birth"} placeholder={"Aaron jackson"} />
          <InputField label={"Place of birth"} placeholder={"Aaron jackson"} />
          <InputField label={"City of birth"} placeholder={"Aaron jackson"} />
        </div>
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

      <button>Save</button>
    </Modal>
  );
};

export default EditProfileModal;
