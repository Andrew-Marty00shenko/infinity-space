import { useTranslation } from "react-i18next";
import Table from "../../../../assets/images/backgrounds/presentation-18.webp";

import "./EighteenthSlide.scss";

const EighteenthSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="presentation-eighteenth">
      <h2>{t("presentation:slide-17-text")}</h2>
      <img src={Table} alt="table" style={{ marginTop: 30 }} />
    </div>
  );
};

export default EighteenthSlide;
