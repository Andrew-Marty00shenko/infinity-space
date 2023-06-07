import { useLocation } from "react-router-dom";
import "./Breadcrumbs.scss";

const Breadcrumbs = () => {
  const location = useLocation();

  return location.pathname === "/dashboard/investment-tools" ? (
    <div className="breadcrumbs">
      <p>Investment tools</p>
      <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.25 8.5L4.75 5L1.25 1.5"
          stroke="#717275"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>How to start in crypto in fast way</span>
    </div>
  ) : null;
};

export default Breadcrumbs;
