import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { loginUser } from "../../../redux/slices/userSlice";
import { connectWallet } from "../../../utils/contract/contract";

import ModalRegister from "../ModalRegister/ModalRegister";

import "swiper/css";

import "./SliderSection.scss";
import { useTranslation } from "react-i18next";

const SliderSection = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [showModalRegister, setShowModalRegister] = useState(false);
  const [uplineId, setUplineId] = useState("");
  const [loading, setLoading] = useState(false);

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
    <section className="slider-section">
      <div className="gradient left"></div>
      <div className="gradient right"></div>
      <div className="gradient-side left"></div>
      <div className="gradient-side right"></div>
      <div className="gradient-bottom"></div>
      <div className="slider-section__title">
        <h2>
          Decentralized open source platform guarantees equality and security
          for everyone
        </h2>
        <p>
          You can read all the rules of interaction on our platform in the smart
          contract code yourself. And we'll tell you a few of its undeniable
          advantages
        </p>
      </div>

      <div className="slider-section__swiper">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <svg
              width="56"
              height="64"
              viewBox="0 0 56 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21 2.37037C21 1.0612 22.0446 0 23.3333 0C24.622 0 25.6667 1.0612 25.6667 2.37037V4.74074H30.3333V2.37037C30.3333 1.0612 31.3779 0 32.6667 0C33.9554 0 35 1.0612 35 2.37037V4.74074H37.3333C39.3925 4.74074 41.1401 6.09563 41.7596 7.97569C42.4421 8.09013 43.091 8.21687 43.7081 8.35619C47.4894 9.20978 49.7302 10.4609 51.2163 11.9708C52.7025 13.4805 53.9341 15.7568 54.7744 19.5981C55.6289 23.5039 56 28.6581 56 35.5556C56 42.453 55.6289 47.6072 54.7744 51.513C53.9341 55.3543 52.7025 57.6306 51.2163 59.1403C49.7302 60.6502 47.4894 61.9013 43.7081 62.7549C39.8633 63.623 34.7897 64 28 64C21.2103 64 16.1367 63.623 12.2919 62.7549C8.5106 61.9013 6.26984 60.6502 4.78373 59.1403C3.29749 57.6306 2.06588 55.3543 1.22563 51.513C0.371134 47.6072 0 42.453 0 35.5556C0 28.6581 0.371134 23.5039 1.22563 19.5981C2.06588 15.7568 3.29749 13.4805 4.78373 11.9708C6.26984 10.4609 8.5106 9.20978 12.2919 8.35619C12.909 8.21687 13.5579 8.09013 14.2404 7.97569C14.8599 6.09563 16.6075 4.74074 18.6667 4.74074H21V2.37037ZM32.9864 23.1102C33.9524 21.8835 33.7567 20.0936 32.5492 19.1121C31.3416 18.1308 29.5795 18.3297 28.6135 19.5564L17.4136 33.7786C16.7412 34.6325 16.61 35.8022 17.0763 36.7878C17.5426 37.7733 18.5237 38.4 19.6001 38.4H30.5743L23.0136 48.0009C22.0476 49.2276 22.2433 51.0175 23.4508 51.999C24.6584 52.9803 26.4205 52.7814 27.3865 51.5547L38.5864 37.3325C39.2588 36.4786 39.39 35.3089 38.9237 34.3234C38.4574 33.3378 37.4763 32.7111 36.3999 32.7111H25.4257L32.9864 23.1102Z"
                fill="url(#paint0_linear_1693_3710)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1693_3710"
                  x1="28"
                  y1="0"
                  x2="28"
                  y2="64"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4E237A" />
                  <stop offset="0.822917" stop-color="#8C18FF" />
                </linearGradient>
              </defs>
            </svg>

            <div className="text-1">Decentralization</div>
            <div className="text-2">
              The whole interface of the platform is intuitive even for
              inexperienced users
            </div>

            <SwiperButtons />
          </SwiperSlide>
          <SwiperSlide>
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 32C0 58.352 5.648 64 32 64C58.352 64 64 58.352 64 32C64 5.648 58.352 0 32 0C5.648 0 0 5.648 0 32ZM44.5523 22.1144C45.5937 23.1558 45.5937 24.8442 44.5523 25.8856L31.219 39.219C30.1776 40.2604 28.4891 40.2604 27.4477 39.219L20.781 32.5523C19.7397 31.5109 19.7397 29.8224 20.781 28.781C21.8224 27.7397 23.5109 27.7397 24.5523 28.781L29.3333 33.5621L40.7811 22.1144C41.8224 21.073 43.5109 21.073 44.5523 22.1144Z"
                fill="url(#paint0_linear_1637_28147)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1637_28147"
                  x1="32"
                  y1="0"
                  x2="32"
                  y2="64"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4E237A" />
                  <stop offset="0.822917" stop-color="#8C18FF" />
                </linearGradient>
              </defs>
            </svg>

            <div className="text-1">{t("slider:equal-conditions")}</div>
            <div className="text-2">{t("slider:equal-conditions-text")}</div>

            <SwiperButtons />
          </SwiperSlide>
          <SwiperSlide>
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 32C0 58.352 5.648 64 32 64C58.352 64 64 58.352 64 32C64 5.648 58.352 0 32 0C5.648 0 0 5.648 0 32ZM44.5523 22.1144C45.5937 23.1558 45.5937 24.8442 44.5523 25.8856L31.219 39.219C30.1776 40.2604 28.4891 40.2604 27.4477 39.219L20.781 32.5523C19.7397 31.5109 19.7397 29.8224 20.781 28.781C21.8224 27.7397 23.5109 27.7397 24.5523 28.781L29.3333 33.5621L40.7811 22.1144C41.8224 21.073 43.5109 21.073 44.5523 22.1144Z"
                fill="#717275"
              />
            </svg>
            <div className="text-1">{t("slider:transparency")}</div>
            <div className="text-2">{t("slider:transparency-text")}</div>

            <SwiperButtons />
          </SwiperSlide>
          <SwiperSlide>
            <svg
              width="80"
              height="64"
              viewBox="0 0 80 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 41.2592L24.7272 56.8315M24.7272 56.8315L24.7272 7.00009M24.7272 56.8315L40.4543 41.2592"
                stroke="#717275"
                strokeWidth="6.21123"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M40.4551 22.5723L56.1822 7M56.1822 7L56.1822 56.8314M56.1822 7L71.9094 22.5723"
                stroke="#717275"
                strokeWidth="6.21123"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-1">{t("slider:digital-access")}</div>
            <div className="text-2">{t("slider:digital-access-text")}</div>

            <SwiperButtons />
          </SwiperSlide>
          <SwiperSlide>
            <svg
              width="66"
              height="64"
              viewBox="0 0 66 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.1023 42.4678C39.9057 42.4678 40.5334 43.1531 40.4367 43.9385C39.8019 49.0936 38.7633 53.6262 37.469 57.2276C36.3625 60.3067 35.1703 62.4196 34.1166 63.6598C33.9305 63.8789 33.6522 63.9974 33.3621 63.999C33.2417 63.9997 33.121 64 33 64C32.879 64 32.7583 63.9997 32.6379 63.999C32.3478 63.9974 32.0695 63.8789 31.8834 63.6598C30.8297 62.4196 29.6375 60.3067 28.531 57.2276C27.2367 53.6262 26.1981 49.0936 25.5633 43.9385C25.4666 43.1531 26.0943 42.4678 26.8977 42.4678H39.1023Z"
                fill="#717275"
              />
              <path
                d="M47.2768 42.4678C46.5802 42.4678 45.9982 42.9892 45.9212 43.671C45.1437 50.5564 43.6751 56.5899 41.7415 61.142C41.3163 62.1431 42.1495 63.2654 43.2281 63.0425C54.224 60.7697 61.1483 54.4506 64.001 44.0851C64.2276 43.2615 63.5833 42.4678 62.7167 42.4678H47.2768Z"
                fill="#717275"
              />
              <path
                d="M65.3548 35.8757C65.3053 36.5618 64.7196 37.0848 64.0211 37.0848H47.8518C47.0804 37.0848 46.4656 36.4513 46.4895 35.692C46.524 34.5949 46.5417 33.4844 46.5417 32.3624C46.5417 30.7936 46.5072 29.2472 46.4403 27.7288C46.4066 26.9632 47.0238 26.3189 47.8021 26.3189H64.0211C64.7196 26.3189 65.3053 26.8419 65.3548 27.528C65.4516 28.8711 65.5 30.2624 65.5 31.7018C65.5 33.1412 65.4516 34.5325 65.3548 35.8757Z"
                fill="#717275"
              />
              <path
                d="M41.0661 35.8131C41.0416 36.525 40.445 37.0848 39.7216 37.0848H26.2784C25.555 37.0848 24.9584 36.525 24.9339 35.8131C24.895 34.6806 24.875 33.5295 24.875 32.3624C24.875 30.7322 24.9141 29.1334 24.9891 27.5727C25.0229 26.8681 25.6163 26.3189 26.3326 26.3189H39.6674C40.3837 26.3189 40.9771 26.8681 41.0109 27.5727C41.0859 29.1334 41.125 30.7322 41.125 32.3624C41.125 33.5295 41.105 34.6806 41.0661 35.8131Z"
                fill="#717275"
              />
              <path
                d="M18.1482 37.0848C18.9196 37.0848 19.5344 36.4513 19.5105 35.692C19.476 34.595 19.4583 33.4844 19.4583 32.3624C19.4583 30.7936 19.4928 29.2472 19.5597 27.7288C19.5934 26.9632 18.9762 26.3189 18.198 26.3189H1.97885C1.28036 26.3189 0.694685 26.8419 0.645229 27.528C0.54841 28.8711 0.5 30.2624 0.5 31.7018C0.5 33.1412 0.548413 34.5325 0.645238 35.8757C0.694695 36.5618 1.28037 37.0848 1.97886 37.0848H18.1482Z"
                fill="#717275"
              />
              <path
                d="M3.28328 42.4678C2.41671 42.4678 1.77235 43.2615 1.99902 44.0851C4.85172 54.4506 11.776 60.7697 22.7719 63.0425C23.8505 63.2654 24.6837 62.1431 24.2585 61.142C22.3249 56.5899 20.8562 50.5564 20.0787 43.671C20.0018 42.9892 19.4198 42.4678 18.7232 42.4678H3.28328Z"
                fill="#717275"
              />
              <path
                d="M37.469 7.49711C38.6499 10.783 39.618 14.844 40.2606 19.4457C40.3712 20.2374 39.7409 20.9359 38.9294 20.9359H27.0706C26.2591 20.9359 25.6288 20.2374 25.7394 19.4457C26.382 14.844 27.3501 10.783 28.531 7.49711C29.6375 4.418 30.8297 2.30512 31.8834 1.06498C32.0895 0.822328 32.271 0.63408 32.4271 0.488306C32.7556 0.18153 33.2444 0.181529 33.5729 0.488305C33.729 0.63408 33.9105 0.822327 34.1166 1.06498C35.1703 2.30512 36.3625 4.418 37.469 7.49711Z"
                fill="#717275"
              />
              <path
                d="M45.7647 19.7514C45.8506 20.4248 46.4289 20.9359 47.1182 20.9359H62.7168C63.5833 20.9359 64.2277 20.1421 64.001 19.3185C61.0934 8.75354 53.956 2.39213 42.5887 0.234312C41.4765 0.0232009 40.6532 1.22653 41.1351 2.2358C43.2393 6.64222 44.8669 12.7158 45.7647 19.7514Z"
                fill="#717275"
              />
              <path
                d="M1.99901 19.3185C1.77234 20.1421 2.41668 20.9359 3.28325 20.9359H18.8818C19.5711 20.9359 20.1494 20.4248 20.2353 19.7514C21.1331 12.7158 22.7607 6.64222 24.8649 2.2358C25.3468 1.22653 24.5235 0.0232011 23.4113 0.234312C12.044 2.39213 4.9066 8.75354 1.99901 19.3185Z"
                fill="#717275"
              />
              <path
                d="M33.1308 0.000711048C33.1306 -0.0017521 33.1309 0.00317419 33.1308 0.000711048V0.000711048Z"
                fill="#717275"
              />
              <path
                d="M32.8692 0.000711366C32.8694 -0.00175215 32.8691 0.00317536 32.8692 0.000711366V0.000711366Z"
                fill="#717275"
              />
            </svg>
            <div className="text-1">{t("slider:total-security")}</div>
            <div className="text-2">{t("slider:total-security-text")}</div>

            <SwiperButtons />
          </SwiperSlide>
          <SwiperSlide>
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6667 40C26.6667 42.9455 29.0545 45.3333 32 45.3333C34.9455 45.3333 37.3333 42.9455 37.3333 40C37.3333 37.0545 34.9455 34.6667 32 34.6667C29.0545 34.6667 26.6667 37.0545 26.6667 40Z"
                fill="url(#paint0_linear_1637_28135)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M44.7716 4.67358C48.129 7.65786 50.3545 11.9847 50.6363 17.4728C61.2503 19.9793 64 26.2097 64 40C64 59.764 58.352 64 32 64C5.648 64 0 59.764 0 40C0 26.2097 2.74973 19.9793 13.3637 17.4728C13.6455 11.9847 15.871 7.65786 19.2284 4.67358C22.7764 1.51973 27.4318 0 32 0C36.5682 0 41.2236 1.51973 44.7716 4.67358ZM32 16C26.8414 16 22.4762 16.1623 18.7914 16.5717C19.2249 13.0495 20.7504 10.4564 22.7716 8.65976C25.2236 6.48027 28.5682 5.33333 32 5.33333C35.4318 5.33333 38.7764 6.48027 41.2284 8.65976C43.2496 10.4564 44.7751 13.0495 45.2086 16.5717C41.5238 16.1623 37.1586 16 32 16ZM21.3333 40C21.3333 45.891 26.109 50.6667 32 50.6667C37.891 50.6667 42.6667 45.891 42.6667 40C42.6667 34.109 37.891 29.3333 32 29.3333C26.109 29.3333 21.3333 34.109 21.3333 40Z"
                fill="url(#paint1_linear_1637_28135)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1637_28135"
                  x1="32"
                  y1="0"
                  x2="32"
                  y2="64"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4E237A" />
                  <stop offset="0.822917" stop-color="#8C18FF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1637_28135"
                  x1="32"
                  y1="0"
                  x2="32"
                  y2="64"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4E237A" />
                  <stop offset="0.822917" stop-color="#8C18FF" />
                </linearGradient>
              </defs>
            </svg>

            <div className="text-1">{t("slider:immutability")}</div>
            <div className="text-2">{t("slider:text")}</div>

            <SwiperButtons />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SliderSection;

export const SwiperButtons = ({ children }) => {
  const swiper = useSwiper();
  return (
    <>
      <div className="next" onClick={() => swiper.slideNext()}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="8"
            y="6.6665"
            width="14.6667"
            height="18.6667"
            fill="#7B4CFF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C2.824 32 0 29.176 0 16C0 2.824 2.824 0 16 0C29.176 0 32 2.824 32 16C32 29.176 29.176 32 16 32ZM14.2761 22.2761L19.6095 16.9428C20.1302 16.4221 20.1302 15.5779 19.6095 15.0572L14.2761 9.72386C13.7554 9.20316 12.9112 9.20316 12.3905 9.72386C11.8698 10.2446 11.8698 11.0888 12.3905 11.6095L16.7811 16L12.3905 20.3905C11.8698 20.9112 11.8698 21.7554 12.3905 22.2761C12.9112 22.7968 13.7554 22.7968 14.2761 22.2761Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="prev" onClick={() => swiper.slidePrev()}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="24"
            y="25.3335"
            width="14.6667"
            height="18.6667"
            transform="rotate(-180 24 25.3335)"
            fill="#7B4CFF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 5.08584e-07C29.176 1.66047e-06 32 2.824 32 16C32 29.176 29.176 32 16 32C2.824 32 -3.56782e-06 29.176 -2.41593e-06 16C-1.26405e-06 2.824 2.824 -6.43299e-07 16 5.08584e-07ZM17.7239 9.72386L12.3905 15.0572C11.8698 15.5779 11.8698 16.4221 12.3905 16.9428L17.7239 22.2761C18.2446 22.7968 19.0888 22.7968 19.6095 22.2761C20.1302 21.7554 20.1302 20.9112 19.6095 20.3905L15.2189 16L19.6095 11.6095C20.1302 11.0888 20.1302 10.2446 19.6095 9.72386C19.0888 9.20316 18.2446 9.20316 17.7239 9.72386Z"
            fill="white"
          />
        </svg>
      </div>
    </>
  );
};
