import { useTranslation } from "react-i18next";
import "./FourteenthSlide.scss";

const FourteenthSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="presentation-fourteenth">
      <h2>
        {t("presentation:slide-14-text-1")} <br />
        <span>{t("presentation:slide-14-text-2")}</span>
      </h2>
      <p>{t("presentation:slide-14-text-3")}</p>
      <h3>{t("presentation:slide-14-text-4")}</h3>
      <p>{t("presentation:slide-14-text-5")}</p>
    </div>
  );
};

export default FourteenthSlide;
