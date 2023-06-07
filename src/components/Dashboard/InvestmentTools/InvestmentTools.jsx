import { useState } from "react";

import InvestmentToolsCard from "./InvestmentToolsCard/InvestmentToolsCard";

import "./InvestmentTools.scss";
import { Col, Row } from "react-bootstrap";

const sortMenu = [
  { id: 1, name: "ASC" },
  { id: 2, name: "DESC" },
  { id: 3, name: "Price high to low" },
  { id: 4, name: "Price low to high" },
];

const InvestmentTools = () => {
  const [openSortMenu, setOpenSortMenu] = useState(false);
  const [activeSort, setActiveSort] = useState("Price high to low");

  const handleClickSort = (item) => {
    setActiveSort(item.name);
    setOpenSortMenu(!openSortMenu);
  };

  return (
    <div className="investment-tools">
      <div className="investment-tools__navigate">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            stroke="#AE7AFF"
            stroke-width="1.5"
          />
          <path
            d="M7 14L9.29289 11.7071C9.68342 11.3166 10.3166 11.3166 10.7071 11.7071L12.2929 13.2929C12.6834 13.6834 13.3166 13.6834 13.7071 13.2929L17 10M17 10V12.5M17 10H14.5"
            stroke="#AE7AFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Invest tools</span>
      </div>

      <div className="investment-tools__search-sort">
        <div className="search">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_2149)">
              <circle
                cx="8.625"
                cy="8.625"
                r="7.125"
                stroke="#717275"
                stroke-width="1.5"
              />
              <path
                d="M13.875 13.875L16.5 16.5"
                stroke="#717275"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_2149">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <input type="text" placeholder="Search for special tool..." />
        </div>

        <div onClick={() => setOpenSortMenu(!openSortMenu)} className="sort">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6663 14.25L12.6663 4.75M12.6663 4.75L15.833 8.01563M12.6663 4.75L9.49967 8.01562"
              stroke="#717275"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.33333 4.75L6.33333 14.25M6.33333 14.25L9.5 10.9844M6.33333 14.25L3.16667 10.9844"
              stroke="#717275"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="name"> Sort by:</span>
          <span className="sort-by">{activeSort}</span>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 1.25L5 4.75L8.5 1.25"
              stroke="#717275"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          {openSortMenu && (
            <ul className="sort__menu">
              {sortMenu.map((item) => {
                return (
                  <li key={item.id} onClick={() => handleClickSort(item)}>
                    {item.name}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="investment-tools-cards">
        <Row>
          <Col className="d-flex justify-content-center justify-content-md-start">
            <InvestmentToolsCard />
          </Col>
          <Col className="d-flex justify-content-center justify-content-md-start">
            <InvestmentToolsCard />
          </Col>
          <Col className="d-flex justify-content-center justify-content-md-start">
            <InvestmentToolsCard />
          </Col>
          <Col className="d-flex justify-content-center justify-content-md-start">
            <InvestmentToolsCard />
          </Col>
          <Col className="d-flex justify-content-center justify-content-md-start">
            <InvestmentToolsCard />
          </Col>
          <Col className="d-flex justify-content-center justify-content-md-start">
            <InvestmentToolsCard />
          </Col>
          <Col className="d-flex justify-content-center justify-content-md-start">
            <InvestmentToolsCard />
          </Col>
          <Col className="d-flex justify-content-center justify-content-md-start">
            <InvestmentToolsCard />
          </Col>
          <Col className="d-flex justify-content-center justify-content-md-start">
            <InvestmentToolsCard />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default InvestmentTools;
