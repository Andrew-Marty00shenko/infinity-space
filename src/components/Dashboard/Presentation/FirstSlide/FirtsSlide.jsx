import { useTranslation } from "react-i18next";
import PresentationPDF from "../../../../assets/pdfs/presentation.pdf";

import "./FirstSlide.scss";

const FirstSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="presentation-first">
      <h2>
        {t("presentation:slide-1-title-small")} <br />
        <span>
          {t("presentation:slide-1-title-big-1")} <br />{" "}
          {t("presentation:slide-1-title-big-2")} <br />{" "}
          {t("presentation:slide-1-title-big-3")}
        </span>
      </h2>
      <p>{t("presentation:slide-1-text")}</p>

      <a href={PresentationPDF} target="_blank">
        {t("presentation:slide-1-pdf")}
      </a>
    </div>
  );
};

export default FirstSlide;
