import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import "./SixthSlide.scss";

const SixthSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="presentation-sixth">
      <p>{t("presentation:slide-6-title")}</p>
      <div>
        <Row>
          <Col md={4}>
            <div className="block one">
              <h5> {t("presentation:slide-6-text-1")}</h5>
              <span> {t("presentation:slide-6-text-2")}</span>
            </div>
          </Col>
          <Col md={4}>
            <div className="block two">
              <h5>{t("presentation:slide-6-text-3")}</h5>
              <span> {t("presentation:slide-6-text-4")}</span>
            </div>
          </Col>
          <Col md={4}>
            <div className="block three">
              <h5>{t("presentation:slide-6-text-5")}</h5>
              <span> {t("presentation:slide-6-text-6")}</span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SixthSlide;
