import { Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import "./FaqSection.scss";

const FaqSection = () => {
  const { t } = useTranslation();

  return (
    <section className="faq-section">
      <h2>{t("faq:title")}</h2>
      <p>{t("faq:text")}</p>
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
  );
};

export default FaqSection;
