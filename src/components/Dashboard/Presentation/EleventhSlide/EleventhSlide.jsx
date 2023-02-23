import "./EleventhSlide.scss";

import Star from "../../../../assets/images/star.png";
import { useTranslation } from "react-i18next";

const EleventhSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="presentation-eleventh">
      <h3>{t("presentation:slide-11-title")}</h3>
      <div>
        <img src={Star} alt="star" />
        {t("presentation:slide-11-text-1")}
      </div>
      <div>
        <img src={Star} alt="star" />
        {t("presentation:slide-11-text-2")}
      </div>
      <div>
        <img src={Star} alt="star" />
        {t("presentation:slide-11-text-3")}
      </div>
      <div>
        <img src={Star} alt="star" />
        {t("presentation:slide-11-text-4")}
      </div>

      <div>
        <img src={Star} alt="star" />
        {t("presentation:slide-11-text-5")}
      </div>
      <div>
        <img src={Star} alt="star" />
        {t("presentation:slide-11-text-6")}
      </div>
      <div>
        <img src={Star} alt="star" />
        {t("presentation:slide-11-text-7")}
      </div>
      <div>
        <img src={Star} alt="star" />
        {t("presentation:slide-11-text-8")}
      </div>
      <div>
        <img src={Star} alt="star" />
        {t("presentation:slide-11-text-9")}
      </div>
    </div>
  );
};

export default EleventhSlide;
