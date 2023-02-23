import { useTranslation } from "react-i18next";
import "./SecondSlide.scss";

const SecondSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="presentation-second">
      <h2>
        {t("presentation:slide-2-title")} <br />
        <span>
          {t("presentation:slide-2-question-1")}
          <br /> {t("presentation:slide-2-question-2")}
        </span>
      </h2>
      <p>
        {t("presentation:slide-2-text-1")}
        <br />
        <br />
        {t("presentation:slide-2-text-2")}
      </p>
    </div>
  );
};

export default SecondSlide;
