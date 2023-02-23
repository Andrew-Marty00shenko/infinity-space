import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import SlideSixteen from "../../../../assets/images/backgrounds/presentation-16.webp";

import "./SixteenthSlide.scss";

const SixteenthSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="presentation-sixteenth">
      <Row className="align-items-center justify-content-center">
        <Col lg={6}>
          <h2>
            <span>
              {t("presentation:slide-16-text-1")} <br />{" "}
              {t("presentation:slide-16-text-2")}
            </span>
          </h2>
          <p>
            {t("presentation:slide-16-text-3")}
            <br />
            <br />
            {t("presentation:slide-16-text-4")}
          </p>
        </Col>
        <Col lg={6}>
          <img style={{ marginLeft: -30 }} src={SlideSixteen} alt="slide" />
        </Col>
      </Row>
    </div>
  );
};

export default SixteenthSlide;
