import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import SlideThirdteenOne from "../../../../assets/images/backgrounds/presentation-13-1.webp";
import SlideThirdteenTwo from "../../../../assets/images/backgrounds/presentation-13-2.webp";

import "./ThirdteenthSlide.scss";

const ThirdteenthSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="presentation-thirdteenth">
      <div className="center">
        <Row>
          <Col md={6}>
            <div>
              <img src={SlideThirdteenOne} alt="slide" />
            </div>
          </Col>
          <Col md={6}>
            <div>
              <img src={SlideThirdteenTwo} alt="slide" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="bot">
        <Row>
          <Col md={6}>
            <p>{t("presentation:slide-13-text-1")}</p>
          </Col>
          <Col md={6}>
            <p>{t("presentation:slide-13-text-2")}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ThirdteenthSlide;
