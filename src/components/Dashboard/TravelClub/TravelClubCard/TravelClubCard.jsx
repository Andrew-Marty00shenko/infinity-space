import { useNavigate } from "react-router-dom";

import CardImage from "../../../../assets/images/dashboard/travel-club/card-image.png";
import UserImage from "../../../../assets/images/dashboard/travel-club/user.png";

import "./TravelClubCard.scss";

const TravelClubCard = () => {
  const navigate = useNavigate();

  return (
    <div className="travel-club-card">
      <div className="card-image">
        <img src={CardImage} alt="" />
      </div>
      <div className="card-text">
        <h4>ZOOM CONFERENTION</h4>
        <p>Cryptocurrency & Bitcoin Trading</p>
      </div>
      <div className="card-info">
        <div>
          <div>7</div>
          <p>Travel seven day`s</p>
        </div>
        <div>
          <div>
            <img src={UserImage} alt="" />
          </div>
          <p>
            <span>Users</span>
            <span>1000+</span>
          </p>
        </div>
      </div>

      <button onClick={() => navigate("1")}>
        Book tour
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

export default TravelClubCard;
