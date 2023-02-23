import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import SlideFifteenOne from "../../../../assets/images/backgrounds/presentation-14-1.webp";
import SlideFifteenTwo from "../../../../assets/images/backgrounds/presentation-14-2.webp";

import "./FifteenthSlide.scss";

const FifteenthSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="presentation-fifteenth">
      <div className="top">
        <Row>
          <Col md={6}>
            <h3>{t("presentation:slide-15-text-1")}</h3>
          </Col>
          <Col md={6}>
            <h3>{t("presentation:slide-15-text-2")}</h3>
          </Col>
        </Row>
      </div>
      <div className="center">
        <Row>
          <Col md={6}>
            <div>
              <img src={SlideFifteenOne} alt="slide" />
            </div>
          </Col>
          <Col md={6}>
            <div>
              <img src={SlideFifteenTwo} alt="slide" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="bot">
        <Row>
          <Col md={6}>
            <p>{t("presentation:slide-15-text-3")}</p>
          </Col>
          <Col md={6}>
            <p>{t("presentation:slide-15-text-4")}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FifteenthSlide;
