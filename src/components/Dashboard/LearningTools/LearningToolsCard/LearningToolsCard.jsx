import { useNavigate } from "react-router-dom";

import UserImage from "../../../../assets/images/dashboard/travel-club/user.png";
import CardImage from "../../../../assets/images/dashboard/learning-tools/card-image.png";
import CardBackground from "../../../../assets/images/dashboard/learning-tools/card-background.png";

import "./LearningToolsCard.scss";

const LearningToolsCard = () => {
  const navigate = useNavigate();

  return (
    <div className="learning-tools-card">
      <div className="card-images">
        <img className="background" src={CardBackground} alt="" />
        <img className="card-image" src={CardImage} alt="" />
      </div>
      <div className="card-text">
        <h4>FOR BEGGINER</h4>
        <p>Cryptocurrency & Bitcoin Trading</p>
      </div>

      <div className="card-info">
        <img src={UserImage} alt="" />
        <span>Speaker</span>
        <p>John Watson</p>
      </div>

      <button onClick={() => navigate("1")}>
        Buy now
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33325 10H16.6666M16.6666 10L11.6666 5M16.6666 10L11.6666 15"
            stroke="white"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default LearningToolsCard;
