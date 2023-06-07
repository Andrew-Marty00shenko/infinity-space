import { useNavigate } from "react-router-dom";

import "./InvestmentToolsCard.scss";

import CardArrowImage from "../../../../assets/images/dashboard/investment-tools/card-arrow.png";
import DollarLeftImage from "../../../../assets/images/dashboard/investment-tools/dollar-left.png";
import DollarRightImage from "../../../../assets/images/dashboard/investment-tools/dollar-right.png";

const InvestmentToolsCard = () => {
  const navigate = useNavigate();

  return (
    <div className="invest-tools-card">
      <div className="stars-background">
        <svg
          width="208"
          height="126"
          viewBox="0 0 208 126"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="205"
            cy="76.5"
            rx="3"
            ry="2.5"
            fill="white"
            fill-opacity="0.5"
          />
          <ellipse cx="72" cy="40.5" rx="1" ry="0.5" fill="white" />
          <circle cx="11.5" cy="24.5" r="0.5" fill="white" />
          <circle cx="169.5" cy="0.5" r="0.5" fill="white" />
          <ellipse
            cx="158.5"
            cy="124"
            rx="1.5"
            ry="2"
            fill="white"
            fill-opacity="0.5"
          />
          <ellipse cx="1.5" cy="92" rx="1.5" ry="2" fill="white" />
        </svg>
      </div>

      <div className="gradient left"></div>
      <div className="gradient right"></div>
      <div className="card-images">
        <img className="dollar left" src={DollarLeftImage} alt="" />
        <img className="dollar right" src={DollarRightImage} alt="" />
        <img className="arrow" src={CardArrowImage} alt="" />
        <div className="shadow"></div>
      </div>

      <div className="card-info">
        <h4>
          How to start in <br /> crypto in fast way
        </h4>
        <p>Here is some description about investment tool</p>
      </div>

      <div className="card-price">
        <div>
          <p>29 117.1 BUSD</p>
          <span>$29 117</span>
        </div>
        <button onClick={() => navigate("1")}>
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
    </div>
  );
};

export default InvestmentToolsCard;
