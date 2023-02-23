import { useTranslation } from "react-i18next";
import "./NinethSlide.scss";

const NinethSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="presentation-nineth">
      <h2>
        {t("presentation:slide-9-title-1")} <br />
        <span> {t("presentation:slide-9-title-2")}</span>
      </h2>
      <p>{t("presentation:slide-9-text-1")}</p>
      <h3>T{t("presentation:slide-9-text-2")}</h3>
      <p>{t("presentation:slide-9-text-3")}</p>
    </div>
  );
};

export default NinethSlide;
