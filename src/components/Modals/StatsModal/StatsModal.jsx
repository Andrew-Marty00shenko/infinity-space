import { Modal } from "react-bootstrap";
import "./StatsModal.scss";
import StatsBackgroundImage from "../../../assets/images/backgrounds/stats-modal-background.png";

const StatsModal = ({ modalShow, setModalShow }) => {
  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="stats-modal"
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
          Balance
        </h3>

        <p>Here is your life balance</p>
      </div>

      <div className="circles">
        <img src={StatsBackgroundImage} alt="" />

        <div className="circle red"></div>
        <div className="circle orange"></div>
        <div className="circle yellow"></div>
        <div className="circle purple"></div>
        <div className="circle blue"></div>
        <div className="circle lightblue"></div>
        <div className="circle green"></div>
        <div className="circle pink"></div>
      </div>

      <div className="items">
        <div className="item">
          <div className="item-block">
            <div className="item-color orange"></div>
            <p className="item-name">Security</p>
          </div>
          <div className="item-stats">
            <p>15,5%</p>
            <p>$234,54</p>
          </div>
        </div>
        <div className="item">
          <div className="item-block">
            <div className="item-color red"></div>
            <p className="item-name">Health</p>
          </div>
          <div className="item-stats">
            <p>15,5%</p>
            <p>$234,54</p>
          </div>
        </div>
        <div className="item">
          <div className="item-block">
            <div className="item-color pink"></div>
            <p className="item-name">Relationships </p>
          </div>
          <div className="item-stats">
            <p>15,5%</p>
            <p>$234,54</p>
          </div>
        </div>
        <div className="item">
          <div className="item-block">
            <div className="item-color yellow"></div>
            <p className="item-name">Brightness of life </p>
          </div>
          <div className="item-stats">
            <p>15,5%</p>
            <p>$234,54</p>
          </div>
        </div>
        <div className="item">
          <div className="item-block">
            <div className="item-color purple"></div>
            <p className="item-name">Vocation </p>
          </div>
          <div className="item-stats">
            <p>15,5%</p>
            <p>$234,54</p>
          </div>
        </div>
        <div className="item">
          <div className="item-block">
            <div className="item-color blue"></div>
            <p className="item-name">Spirituality </p>
          </div>
          <div className="item-stats">
            <p>15,5%</p>
            <p>$234,54</p>
          </div>
        </div>
        <div className="item">
          <div className="item-block">
            <div className="item-color lightblue"></div>
            <p className="item-name">Environment </p>
          </div>
          <div className="item-stats">
            <p>15,5%</p>
            <p>$234,54</p>
          </div>
        </div>
        <div className="item">
          <div className="item-block">
            <div className="item-color green"></div>
            <p className="item-name">Self improvement </p>
          </div>
          <div className="item-stats">
            <p>15,5%</p>
            <p>$234,54</p>
          </div>
        </div>
      </div>

      <button>Save</button>
    </Modal>
  );
};

export default StatsModal;
