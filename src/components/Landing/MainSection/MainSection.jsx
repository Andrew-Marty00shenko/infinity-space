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

import Preloader from "../../Common/Preloader";
import ModalRegister from "../ModalRegister/ModalRegister";

import ChainImg from "../../../assets/images/chain.png";
import CryptoCurrencyImg from "../../../assets/images/cryptocurrency.png";
import SmartContractImg from "../../../assets/images/smart-contract.png";

import Circle from "../../../assets/images/img/circle.png";
import CircleWebp from "../../../assets/images/img/circle.webp";

import Space from "../../../assets/images/img/space.png";
import SpaceWebp from "../../../assets/images/img/space.webp";

import logo1 from "../../../assets/images/img/logo-1.png";
import logo1Webp from "../../../assets/images/img/logo-1.webp";

import logo2 from "../../../assets/images/img/logo-2.png";
import logo2Webp from "../../../assets/images/img/logo-2.webp";

import Moon from "../../../assets/images/img/moon.png";
import MoonWebp from "../../../assets/images/img/moon.webp";

import Coin2 from "../../../assets/images/img/coin-2.png";
import Coin2Webp from "../../../assets/images/img/coin-2.webp";

import Main from "../../../assets/images/img/main.png";
import MainWebp from "../../../assets/images/img/main.webp";

import Coin1 from "../../../assets/images/img/coin-1.png";
import Coin1Webp from "../../../assets/images/img/coin-1.webp";

import DotsLeft from "../../../assets/images/img/dots-left.png";
import DotsRight from "../../../assets/images/img/dots-right.png";

import BigCircle1 from "../../../assets/images/img/big-circle-1.png";
import BigCircle1Webp from "../../../assets/images/img/big-circle-1.webp";

import BigCircle2 from "../../../assets/images/img/big-circle-2.png";
import BigCircle2Webp from "../../../assets/images/img/big-circle-2.webp";

import Polygon from "../../../assets/images/img/polygon.png";
import PolygonWebp from "../../../assets/images/img/polygon.webp";

import CircleLight from "../../../assets/images/img/circle-light.png";
import CircleLightWebp from "../../../assets/images/img/circle-light.webp";

import LogoAnimation from "../../../assets/animation/logoAnimation.gif";

import "./MainSection.scss";
import { useTranslation } from "react-i18next";

const MainSection = ({ data, loadingData, totals }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

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

  useEffect(() => {
    if (window.innerWidth > 768) {
      var scene1 = document.querySelector(".js-parallax");
      var scene2 = document.querySelector(".js-parallax-1");
      var scene3 = document.querySelector(".js-parallax-2");

      new Parallax(scene1, {
        selector: ".layer",
      });
      new Parallax(scene2, {
        selector: ".layer",
      });
      new Parallax(scene3, {
        selector: ".layer",
      });
    }
  }, []);

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
        <div className="lan">
          <div className="bg-sections-wrapper">
            {isWebpSupported() ? (
              <img src={CircleWebp} alt="circle" className="img-circle" />
            ) : (
              <img src={Circle} alt="circle" className="img-circle" />
            )}

            <section className="section-bg section-bg-1">
              {isWebpSupported() ? (
                <img src={SpaceWebp} alt="space" className="space" />
              ) : (
                <img src={Space} alt="space" className="space" />
              )}

              <div className="parallax js-parallax">
                <div className="img logo-1">
                  {isWebpSupported() ? (
                    <img
                      src={logo1Webp}
                      alt="logo-1"
                      data-depth="0.12"
                      className="layer part"
                    />
                  ) : (
                    <img
                      src={logo1}
                      alt="logo-1"
                      data-depth="0.12"
                      className="layer part"
                    />
                  )}
                </div>
                <div className="img logo-2">
                  {isWebpSupported() ? (
                    <img
                      src={logo2Webp}
                      alt="logo-2"
                      data-depth="0.1"
                      className="layer part"
                    />
                  ) : (
                    <img
                      src={logo2}
                      alt="logo-2"
                      data-depth="0.1"
                      className="layer part"
                    />
                  )}
                </div>
                <div className="img moon">
                  {isWebpSupported() ? (
                    <img
                      src={MoonWebp}
                      alt="moon"
                      data-depth="0.08"
                      className="layer part"
                    />
                  ) : (
                    <img
                      src={Moon}
                      alt="moon"
                      data-depth="0.08"
                      className="layer part"
                    />
                  )}
                </div>
                <div className="img coin-2">
                  {isWebpSupported() ? (
                    <img
                      src={Coin2Webp}
                      alt="coin-2"
                      data-depth="0.05"
                      className="layer part"
                    />
                  ) : (
                    <img
                      src={Coin2}
                      alt="coin-2"
                      data-depth="0.05"
                      className="layer part"
                    />
                  )}
                </div>
                <div className="img lead">
                  {isWebpSupported() ? (
                    <img
                      src={MainWebp}
                      alt="main"
                      data-depth="0.02"
                      className="layer part"
                    />
                  ) : (
                    <img
                      src={Main}
                      alt="main"
                      data-depth="0.02"
                      className="layer part"
                    />
                  )}
                </div>
                <div className="img coin-1">
                  {isWebpSupported() ? (
                    <img
                      src={Coin1Webp}
                      alt="coin-1"
                      data-depth="0.2"
                      className="layer part"
                    />
                  ) : (
                    <img
                      src={Coin1}
                      alt="coin-1"
                      data-depth="0.2"
                      className="layer part"
                    />
                  )}
                </div>
              </div>
            </section>

            <section className="section-bg section-bg-2">
              <div className="parallax js-parallax-1">
                <div className="img dots-left">
                  <img
                    src={DotsLeft}
                    alt="dots-left"
                    data-depth="0.04"
                    className="layer part"
                  />
                </div>
                <div className="img dots-right">
                  <img
                    src={DotsRight}
                    alt="dots-right"
                    data-depth="0.04"
                    className="layer part"
                  />
                </div>
              </div>

              <div className="imgs-wrap">
                {isWebpSupported() ? (
                  <img
                    src={BigCircle1Webp}
                    alt="big-circle-1"
                    className="big-circle-1"
                  />
                ) : (
                  <img
                    src={BigCircle1}
                    alt="big-circle-1"
                    className="big-circle-1"
                  />
                )}
                {isWebpSupported() ? (
                  <img
                    src={BigCircle2Webp}
                    alt="big-circle-1"
                    className="big-circle-2"
                  />
                ) : (
                  <img
                    src={BigCircle2}
                    alt="big-circle-1"
                    className="big-circle-2"
                  />
                )}
              </div>

              <div className="parallax js-parallax-2">
                <div className="img polygon">
                  {isWebpSupported() ? (
                    <img
                      src={PolygonWebp}
                      alt="polygon"
                      data-depth="0.01"
                      className="layer part"
                    />
                  ) : (
                    <img
                      src={Polygon}
                      alt="polygon"
                      data-depth="0.01"
                      className="layer part"
                    />
                  )}
                </div>
              </div>

              <div className="imgs-wrap">
                {isWebpSupported() ? (
                  <img
                    src={CircleLightWebp}
                    alt="circle-right"
                    className="circle-light left"
                  />
                ) : (
                  <img
                    src={CircleLight}
                    alt="circle-right"
                    className="circle-light left"
                  />
                )}
                {isWebpSupported() ? (
                  <img
                    src={CircleLightWebp}
                    alt="circle-right"
                    className="circle-light right"
                  />
                ) : (
                  <img
                    src={CircleLight}
                    alt="circle-right"
                    className="circle-light right"
                  />
                )}
              </div>
            </section>
          </div>
        </div>
        <div className="main-section__content">
          <div className="animation-logo">
            <img src={LogoAnimation} alt="logo" />
            <p> Infinity Space</p>
          </div>

          <h1>
            <span>{t("landing:title-small")}</span>
            <br />
            {t("landing:title-big-1")} <br /> {t("landing:title-big-2")} <br />{" "}
            {t("landing:title-big-3")}
          </h1>
          <h2>
            {t("landing:text")} <br /> {t("landing:text-2")}
          </h2>
          <Link to="/">
            <button onClick={handleClickConnectWallet} disabled={loading}>
              {loading ? "Loading..." : t("landing:connect-btn")}
            </button>
          </Link>

          <div className="main-section__stats">
            <div>
              <p> &#62;{data.totalUsers}</p>
              <p> {t("landing:quantity-users")}</p>
            </div>
            <div>
              <p> {diffDays}</p>
              <p>{t("landing:days-after-official-start")}</p>
            </div>

            <div>
              <p>{Math.ceil(data.totalProfit / 1e18).toLocaleString("ru")} $</p>
              <p>{t("landing:earned-all-time")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="info-project-section">
        <div className="info-project-section__presentation">
          <a href={PresentationPDF} target="_blank">
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
