import "./Preloader.scss";

import { Player } from "@lottiefiles/react-lottie-player";
import Animation from "../../assets/animation/animation.json";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

const Preloader = ({ team, levels }) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames("preloader", {
        "preloader--side": team || levels,
      })}
    >
      <div
        className={classNames("circle-1", {
          "circle-1--side": team || levels,
        })}
      ></div>
      <div
        className={classNames("circle-2", {
          "circle-2--side": team || levels,
        })}
      ></div>
      <div
        className={classNames("preloader__block", {
          "preloader__block--side": team || levels,
        })}
      >
        <Player
          src={Animation}
          loop
          autoplay
          style={{ height: "90px", width: "120px" }}
        />
        <div>
          <p>
            {levels
              ? `${t("global:loading-level-activation")}...`
              : `${t("global:loading")}...`}
          </p>
          <span>{t("global:please-wait")}</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
