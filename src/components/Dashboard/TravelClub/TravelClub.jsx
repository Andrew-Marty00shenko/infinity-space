import TravelClubCard from "./TravelClubCard/TravelClubCard";

import "./TravelClub.scss";
import { Col, Row } from "react-bootstrap";
import Pagination from "../../Common/Pagination/Pagination";

const TravelClub = () => {
  return (
    <div className="travel-club">
      <div className="travel-club__navigate">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.09155 6.63659L9.78267 3.49965C11.2037 2.83345 12.7961 2.83345 14.2171 3.49965L20.9083 6.63664C22.3638 7.31899 22.3638 9.68105 20.9083 10.3634L14.2172 13.5003C12.7962 14.1665 11.2038 14.1665 9.78275 13.5003L4.99995 11.2581"
            stroke="#AFC6FF"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M2.5 15V12.1376C2.5 10.8584 2.5 10.2188 2.83032 9.71781C3.16064 9.21687 3.74853 8.96492 4.92432 8.461L6 8"
            stroke="#AFC6FF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19 11.5V16.6254C19 17.6334 18.4965 18.5772 17.6147 19.0656C16.1463 19.8787 13.796 21 12 21C10.204 21 7.8537 19.8787 6.38533 19.0656C5.5035 18.5772 5 17.6334 5 16.6254V11.5"
            stroke="#AFC6FF"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>

        <span>Travel club</span>
      </div>

      <div className="travel-club-cards">
        <Row>
          <Col className="d-flex justify-content-center justify-content-md-start">
            <TravelClubCard />
          </Col>
          <Col className="d-flex justify-content-center justify-content-md-start">
            <TravelClubCard />
          </Col>
          <Col className="d-flex justify-content-center justify-content-md-start">
            <TravelClubCard />
          </Col>
          <Col className="d-flex justify-content-center justify-content-md-start">
            <TravelClubCard />
          </Col>
          <Col className="d-flex justify-content-center justify-content-md-start">
            <TravelClubCard />
          </Col>
          <Col className="d-flex justify-content-center justify-content-md-start">
            <TravelClubCard />
          </Col>
          <Col className="d-flex justify-content-center justify-content-md-start">
            <TravelClubCard />
          </Col>
          <Col className="d-flex justify-content-center justify-content-md-start">
            <TravelClubCard />
          </Col>
          <Col className="d-flex justify-content-center justify-content-md-start">
            <TravelClubCard />
          </Col>
        </Row>
      </div>

      <Pagination />
    </div>
  );
};

export default TravelClub;