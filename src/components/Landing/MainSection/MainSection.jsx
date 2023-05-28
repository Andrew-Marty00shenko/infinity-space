import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Parallax from "parallax-js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { isWebpSupported } from "react-image-webp/dist/utils";

import { loginUser } from "../../../redux/slices/userSlice";
import { connectWallet } from "../../../utils/contract/contract";

import PresentationPDF from "../../../assets/pdfs/presentation.pdf";
import PresentationPDFHindi from "../../../assets/pdfs/presentationHi.pdf";
import PresentationPDFPt from "../../../assets/pdfs/presentationPt.pdf";

import Preloader from "../../Common/Preloader";
import ModalRegister from "../ModalRegister/ModalRegister";

import ChainImg from "../../../assets/images/chain.png";
import CryptoCurrencyImg from "../../../assets/images/cryptocurrency.png";
import SmartContractImg from "../../../assets/images/smart-contract.png";

import MainImage from "../../../assets/images/main-section/main.png";
import MainImageBackround from "../../../assets/images/main-section/main-image-background.png";
import MainBottom from "../../../assets/images/main-section/bot-background.png";
import BotCirlcle1 from "../../../assets/images/main-section/bot-1-circle.png";
import BotCirlcle2 from "../../../assets/images/main-section/bot-2-circle.png";

import "./MainSection.scss";
import { useTranslation } from "react-i18next";

const MainSection = ({ data, loadingData, totals }) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [uplineId, setUplineId] = useState("");

  let currentDate = new Date("01/18/2023");
  let launchDate = new Date();
  let timeDiff = Math.abs(currentDate.getTime() - launchDate.getTime());
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  useEffect(() => {
    if (params.id !== undefined) {
      if (!isNaN(parseInt(params.id, 10))) {
        navigate(`/?user_id=${params.id}`, { replace: true });
      } else {
        navigate("/404");
      }
    }
  }, []);

  // useEffect(() => {
  //   if (window.innerWidth > 768) {
  //     var scene1 = document.querySelector(".js-parallax");
  //     var scene2 = document.querySelector(".js-parallax-1");
  //     var scene3 = document.querySelector(".js-parallax-2");

  //     new Parallax(scene1, {
  //       selector: ".layer",
  //     });
  //     new Parallax(scene2, {
  //       selector: ".layer",
  //     });
  //     new Parallax(scene3, {
  //       selector: ".layer",
  //     });
  //   }
  // }, []);

  const handleClickConnectWallet = async () => {
    if (window.web3) {
      const account = await connectWallet();
      setLoading(true);
      if (account) {
        dispatch(loginUser(account)).then(({ payload }) => {
          if (!payload.response) {
            setShowModalRegister(true);
          }

          setLoading(false);
        });
      }
    } else {
      toast.error(t("global:metamask-is-not"));
    }
  };

  return (
    <>
      {loadingData && <Preloader />}
      <section className="main-section">
        <div className="main-section__bottom-image">
          <div className="gradient"></div>
          <img className="main-bottom-image" src={MainBottom} alt="" />
          <img className="bot-circle-1" src={BotCirlcle1} alt="" />
          <img className="bot-circle-2" src={BotCirlcle2} alt="" />
        </div>

        <div className="main-section__content">
          <h1>
            Worldwide DeFi platform <br /> for making money
          </h1>
          <h2>
            Powerful marketing based on smart contract
            <br /> technology gives unlimited possibilities
          </h2>

          <div className="main-section__content-button">
            <button onClick={handleClickConnectWallet} disabled={loading}>
              Try now
            </button>
          </div>

          <div className="main-section__content-images">
            <img
              className="main-image-background"
              src={MainImageBackround}
              alt=""
            />
            <img className="main-image" src={MainImage} alt="" />
            <div className="bot-circle"></div>
          </div>
        </div>
      </section>

      <section className="info-project-section">
        <div className="info-project-section__presentation">
          <a
            href={
              i18n.language === "EN"
                ? PresentationPDF
                : i18n.language === "HI"
                ? PresentationPDFHindi
                : PresentationPDFPt
            }
            target="_blank"
          >
            {t("landing:check-pdf")}
          </a>
        </div>
        <div className="info-project-section__top">
          <h2>
            {t("landing:web3-title-big")}{" "}
            <span> {t("landing:web3-title-small")}</span>
          </h2>
          <h3>{t("landing:web3-text")}</h3>
          <div className="info-project-section__info">
            <div className="info-block">
              <div className="info-block__img">
                <img src={ChainImg} alt="chain" />
              </div>
              <div className="info-block__text">
                <p>{t("landing:blockchain")}</p>
                <p>{t("landing:blockchain-text")}</p>
                <div>
                  <a href={`${PresentationPDF}#page=6`} target="_blank">
                    {t("landing:learn-more")} &#62;
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="info-block">
              <div className="info-block__img">
                <img src={CryptoCurrencyImg} alt="cryptocurrency" />
              </div>
              <div className="info-block__text">
                <p>{t("landing:cryptocurrency")}</p>
                <p>{t("landing:cryptocurrency-text")}</p>
                <div>
                  <a href={`${PresentationPDF}#page=6`} target="_blank">
                    {t("landing:learn-more")} &#62;
                  </a>
                </div>
              </div>
            </div>
            <div className="info-block">
              <div className="info-block__img">
                <img src={SmartContractImg} alt="smart-contract" />
              </div>
              <div className="info-block__text">
                <p>{t("landing:smart-contract")}</p>
                <p>{t("landing:smart-contract-text")}</p>
                <div>
                  <a href={`${PresentationPDF}#page=6`} target="_blank">
                    {t("landing:learn-more")} &#62;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="info-project-section__results">
          <h2>{t("landing:results")} </h2>
          <h3>{t("landing:user-earnings")}</h3>
          <h4>{t("landing:statistics")}</h4>
          <div className="info-project-section__results-blocks">
            <div className="result-block">
              <div>
                <p className="result-block__top-text">{data.totalUsers}</p>
                {/* <div>+ {totals.joinedAtLatestDay}</div> */}
              </div>
              <p className="result-block__bottom-text">
                {t("landing:quantity-users")}
              </p>
            </div>
            <div className="result-block">
              <div>
                <p className="result-block__top-text">
                  {Math.ceil(data.totalProfit / 1e18).toLocaleString("ru")} $
                </p>
                {/* <div>+ {(totals.profitAtLatestDay / 1e18).toLocaleString()}</div> */}
              </div>
              <p className="result-block__bottom-text">
                {t("landing:total-result")}
              </p>
            </div>

            <div className="result-block__mobile">
              <div>
                <div>
                  <p className="result-block__mobile__top-text">
                    {data.totalUsers}
                  </p>
                  {/* <div> + {totals.joinedAtLatestDay}</div> */}
                </div>
                <p className="result-block__mobile__bottom-text">
                  {t("landing:quantity-users")}
                </p>
              </div>
              <div>
                <div>
                  <p className="result-block__mobile__top-text">
                    {Math.ceil(data.totalProfit / 1e18).toLocaleString("ru")}{" "}
                    BUSD
                  </p>
                  {/* <div>+ {(totals.profitAtLatestDay / 1e18).toLocaleString()}</div> */}
                </div>
                <p className="result-block__mobile__bottom-text">
                  {t("landing:total-result")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <ModalRegister
          showModalRegister={showModalRegister}
          setShowModalRegister={setShowModalRegister}
          uplineId={uplineId}
          setUplineId={setUplineId}
        />
      </section>
    </>
  );
};

export default MainSection;
