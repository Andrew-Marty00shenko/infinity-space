import { useTranslation } from "react-i18next";
import "./SeventhSlide.scss";

const SeventhSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="presentation-seventh">
      <div>
        <h3>{t("presentation:slide-7-title")}</h3>
        <p>{t("presentation:slide-7-text-1")}</p>
      </div>
      <div>
        <h3>{t("presentation:slide-7-text-2")}</h3>
        <p>{t("presentation:slide-7-text-3")}</p>
      </div>
    </div>
  );
};

export default SeventhSlide;
