import { useTranslation } from "react-i18next";
import "./Play2earnGame.scss";

const Play2earnGame = () => {
  const { t } = useTranslation();

  return (
    <div className="play2earn-game">
      <h2>{t("global:coming-soon")}</h2>
    </div>
  );
};

export default Play2earnGame;
