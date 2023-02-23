import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import SlideTwelveOne from "../../../../assets/images/backgrounds/presentation-12-1.webp";
import SlideTwelveTwo from "../../../../assets/images/backgrounds/presentation-12-2.webp";

import "./TwelvethSlide.scss";

const TwelvethSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="presentation-twelveth">
      <div className="top">
        <Row>
          <Col md={6}>
            <h3>{t("presentation:slide-12-text-1")}</h3>
          </Col>
          <Col md={6}>
            <p>{t("presentation:slide-12-text-2")}</p>
          </Col>
        </Row>
      </div>
      <div className="center">
        <Row>
          <Col md={6}>
            <div>
              <img src={SlideTwelveOne} alt="slide" />
            </div>
          </Col>
          <Col md={6}>
            <div>
              <img src={SlideTwelveTwo} alt="slide" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="bot">
        <Row>
          <Col md={6}>
            <p>{t("presentation:slide-12-text-3")}</p>
          </Col>
          <Col md={6}>
            <p>{t("presentation:slide-12-text-4")}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TwelvethSlide;
