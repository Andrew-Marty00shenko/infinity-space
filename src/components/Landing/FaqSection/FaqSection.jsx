import { Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import CircleBig from "../../../assets/images/faq-section/circle-big.png";
import CircleSmall from "../../../assets/images/faq-section/circle-small.png";

import "./FaqSection.scss";
import { Element } from "react-scroll";

const FaqSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <Element name="faq"></Element>
      <section className="faq-section">
        <div className="gradient-side left"></div>
        <div className="gradient-side right"></div>
        <div className="gradient-top"></div>
        <div className="faq-section__title">
          <h2>FAQ</h2>
          <p>
            If you have any questions, you may find the answer below. If not,
            you can contact support and ask your question
          </p>
        </div>

        <div className="faq-section__accordion">
          <img className="circle-big" src={CircleBig} alt="" />
          <img className="circle-small" src={CircleSmall} alt="" />
        </div>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header> {t("faq:q-1")}</Accordion.Header>
            <Accordion.Body>{t("faq:a-1")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{t("faq:q-2")}</Accordion.Header>
            <Accordion.Body>{t("faq:a-2")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>{t("faq:q-3")}?</Accordion.Header>
            <Accordion.Body>{t("faq:a-3")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>{t("faq:q-4")}</Accordion.Header>
            <Accordion.Body>{t("faq:a-4")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>{t("faq:q-5")}</Accordion.Header>
            <Accordion.Body>{t("faq:a-5")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>{t("faq:q-6")}</Accordion.Header>
            <Accordion.Body>{t("faq:a-6")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>{t("faq:q-7")}</Accordion.Header>
            <Accordion.Body>{t("faq:a-7")}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </>
  );
};

export default FaqSection;
