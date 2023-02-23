import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import "./EighthSlide.scss";

const EighthSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="presentation-eighth">
      <div>
        <Row>
          <Col lg={6}>
            <div className="block">
              <h3>{t("presentation:slide-8-title")}</h3>
              <p>
                {t("presentation:slide-8-text-1")}{" "}
                <a href="https://metamask.io/download/" target="_blank">
                  link
                </a>{" "}
                {t("presentation:slide-8-text-2")}
              </p>
            </div>
            <div className="video">
              <iframe
                width="420"
                src="https://www.youtube.com/embed/Af_lQ1zUnoM"
              ></iframe>
            </div>
          </Col>
          <Col lg={6}>
            <div className="block">
              <p>
                {t("presentation:slide-8-text-3")} <br /> <br />
                {t("presentation:slide-8-text-3")}
                {t("presentation:slide-8-text-4")} <br /> <br />
                {t("presentation:slide-8-text-5")}
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EighthSlide;
