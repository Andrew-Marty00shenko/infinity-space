import Breadcrumbs from "../../Common/Breadcrumbs/Breadcrumbs";

import Image1 from "../../../assets/images/dashboard/investment-tools/img1.png";
import Image1Tablet from "../../../assets/images/dashboard/investment-tools/img1-desktop.png";
import Image1Mobile from "../../../assets/images/dashboard/investment-tools/img1-mobile.png";
import Logo from "../../../assets/images/dashboard/investment-tools/logo.png";
import LogoMobile from "../../../assets/images/dashboard/investment-tools/logo-mobile.png";
import CourseImage from "../../../assets/images/dashboard/investment-tools/course.png";
import SmartContactImage from "../../../assets/images/dashboard/investment-tools/smart-contract.png";
import Gradient from "../../../assets/images/dashboard/investment-tools/gradient.png";

import "./InvestmentTools.scss";
import useBreakpoint from "../../../hooks/useBreakpoints";

const InvestmentTools = () => {
  const breakpoint = useBreakpoint();

  console.log(breakpoint);

  return (
    <div className="investment-tools">
      <Breadcrumbs />

      <div className="investment-tools__top">
        <div className="background-block"></div>
        <div className="image">
          <img
            className="img-1"
            src={
              breakpoint < 690
                ? Image1Mobile
                : breakpoint < 1440
                ? Image1Tablet
                : Image1
            }
            alt=""
          />
        </div>
        <div className="investment-tools__top-block">
          <div className="block-image">
            <img src={breakpoint === "0" ? LogoMobile : Logo} alt="logo" />

            <div>
              <p>Creator</p>
              <span>SPACE CLUB</span>
            </div>
          </div>
          <h2>The Complete Cryptocurrency & Bitcoin Trading Course 2023</h2>
          <p>
            Cryptocurrency & Bitcoin Trading - Earn Extra Passive Income Weekly
            Trading Crypto & Altcoin Using Technical Analysis
          </p>

          <div className="block-invest">
            <span>price</span>
            <p>29 117.1 BUSD</p>
            <span>$29 117</span>
            <button className="buy">Buy now</button>
            <span style={{ textAlign: "center", margin: 13 }}>
              Гарантия возврата денег — 30 дней
            </span>

            <h4>Этот курс включает:</h4>

            <ul>
              <li>
                <svg
                  width="10"
                  height="13"
                  viewBox="0 0 10 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3069 5.2837L3.09315 2.86693C4.24777 1.30474 4.82509 0.523637 5.36372 0.6887C5.90234 0.853763 5.90234 1.81178 5.90234 3.72781V3.90847C5.90234 4.59954 5.90234 4.94508 6.12316 5.16182L6.13484 5.17304C6.36042 5.3852 6.72005 5.3852 7.43931 5.3852C8.73366 5.3852 9.38083 5.3852 9.59955 5.77775C9.60317 5.78425 9.6067 5.79081 9.61011 5.79741C9.81658 6.19604 9.44187 6.70301 8.69243 7.71697L6.90618 10.1337C5.75153 11.6959 5.17421 12.477 4.63558 12.3119C4.09695 12.1469 4.09697 11.1889 4.09699 9.2728L4.097 9.09222C4.09701 8.40114 4.09701 8.0556 3.8762 7.83886L3.86452 7.82763C3.63893 7.61547 3.2793 7.61547 2.56003 7.61547C1.26569 7.61547 0.618519 7.61547 0.399798 7.22292C0.396176 7.21642 0.392656 7.20987 0.389237 7.20327C0.182765 6.80464 0.557476 6.29766 1.3069 5.2837Z"
                    fill="#BFBFC1"
                  />
                </svg>
                9,5 hours видео по запросу
              </li>
              <li>
                {" "}
                <svg
                  width="10"
                  height="13"
                  viewBox="0 0 10 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3069 5.2837L3.09315 2.86693C4.24777 1.30474 4.82509 0.523637 5.36372 0.6887C5.90234 0.853763 5.90234 1.81178 5.90234 3.72781V3.90847C5.90234 4.59954 5.90234 4.94508 6.12316 5.16182L6.13484 5.17304C6.36042 5.3852 6.72005 5.3852 7.43931 5.3852C8.73366 5.3852 9.38083 5.3852 9.59955 5.77775C9.60317 5.78425 9.6067 5.79081 9.61011 5.79741C9.81658 6.19604 9.44187 6.70301 8.69243 7.71697L6.90618 10.1337C5.75153 11.6959 5.17421 12.477 4.63558 12.3119C4.09695 12.1469 4.09697 11.1889 4.09699 9.2728L4.097 9.09222C4.09701 8.40114 4.09701 8.0556 3.8762 7.83886L3.86452 7.82763C3.63893 7.61547 3.2793 7.61547 2.56003 7.61547C1.26569 7.61547 0.618519 7.61547 0.399798 7.22292C0.396176 7.21642 0.392656 7.20987 0.389237 7.20327C0.182765 6.80464 0.557476 6.29766 1.3069 5.2837Z"
                    fill="#BFBFC1"
                  />
                </svg>
                4 статей
              </li>
              <li>
                {" "}
                <svg
                  width="10"
                  height="13"
                  viewBox="0 0 10 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3069 5.2837L3.09315 2.86693C4.24777 1.30474 4.82509 0.523637 5.36372 0.6887C5.90234 0.853763 5.90234 1.81178 5.90234 3.72781V3.90847C5.90234 4.59954 5.90234 4.94508 6.12316 5.16182L6.13484 5.17304C6.36042 5.3852 6.72005 5.3852 7.43931 5.3852C8.73366 5.3852 9.38083 5.3852 9.59955 5.77775C9.60317 5.78425 9.6067 5.79081 9.61011 5.79741C9.81658 6.19604 9.44187 6.70301 8.69243 7.71697L6.90618 10.1337C5.75153 11.6959 5.17421 12.477 4.63558 12.3119C4.09695 12.1469 4.09697 11.1889 4.09699 9.2728L4.097 9.09222C4.09701 8.40114 4.09701 8.0556 3.8762 7.83886L3.86452 7.82763C3.63893 7.61547 3.2793 7.61547 2.56003 7.61547C1.26569 7.61547 0.618519 7.61547 0.399798 7.22292C0.396176 7.21642 0.392656 7.20987 0.389237 7.20327C0.182765 6.80464 0.557476 6.29766 1.3069 5.2837Z"
                    fill="#BFBFC1"
                  />
                </svg>
                19 ресурсов для скачивания
              </li>
              <li>
                {" "}
                <svg
                  width="10"
                  height="13"
                  viewBox="0 0 10 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3069 5.2837L3.09315 2.86693C4.24777 1.30474 4.82509 0.523637 5.36372 0.6887C5.90234 0.853763 5.90234 1.81178 5.90234 3.72781V3.90847C5.90234 4.59954 5.90234 4.94508 6.12316 5.16182L6.13484 5.17304C6.36042 5.3852 6.72005 5.3852 7.43931 5.3852C8.73366 5.3852 9.38083 5.3852 9.59955 5.77775C9.60317 5.78425 9.6067 5.79081 9.61011 5.79741C9.81658 6.19604 9.44187 6.70301 8.69243 7.71697L6.90618 10.1337C5.75153 11.6959 5.17421 12.477 4.63558 12.3119C4.09695 12.1469 4.09697 11.1889 4.09699 9.2728L4.097 9.09222C4.09701 8.40114 4.09701 8.0556 3.8762 7.83886L3.86452 7.82763C3.63893 7.61547 3.2793 7.61547 2.56003 7.61547C1.26569 7.61547 0.618519 7.61547 0.399798 7.22292C0.396176 7.21642 0.392656 7.20987 0.389237 7.20327C0.182765 6.80464 0.557476 6.29766 1.3069 5.2837Z"
                    fill="#BFBFC1"
                  />
                </svg>
                Полный пожизненный доступ
              </li>
            </ul>

            <button className="share">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 11C6.57003 11 6.10504 11 5.72354 11.1022C4.68827 11.3796 3.87962 12.1883 3.60222 13.2235C3.5 13.605 3.5 14.07 3.5 15V16.2C3.5 17.8802 3.5 18.7202 3.82698 19.362C4.1146 19.9265 4.57354 20.3854 5.13803 20.673C5.77976 21 6.61984 21 8.3 21H16.7C18.3802 21 19.2202 21 19.862 20.673C20.4265 20.3854 20.8854 19.9265 21.173 19.362C21.5 18.7202 21.5 17.8802 21.5 16.2V15C21.5 14.07 21.5 13.605 21.3978 13.2235C21.1204 12.1883 20.3117 11.3796 19.2765 11.1022C18.895 11 18.43 11 17.5 11M16.5 7L12.5 3M12.5 3L8.5 7M12.5 3V15"
                  stroke="#717275"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
      <div className="investment-tools__content">
        <img src={Gradient} alt="" className="gradient-img" />
        <h3>ABOUT</h3>
        <div className="content-text">
          <h4>About what this course?</h4>
          <p>
            Finally, You'll Discover Profitable Crypto Trading Secrets & Get
            Ahead of the Game in 48 Hours or Less. Get Results or Your Money
            Back! Close your eyes and imagine your dream life: relaxing on a
            tropical beach, sipping on a refreshing drink, with the freedom to
            travel whenever you please. Sounds amazing, right?
          </p>
        </div>
        <div className="content-text">
          <h4>
            But what if I told you that it's possible to turn this dream into a
            reality?
          </h4>
          <p>
            All you need is the right knowledge, skills, and tools to make it
            happen. And that's where The Complete Cryptocurrency & Bitcoin
            Trading Course comes in.
            <br />
            <br />I know what you're thinking, "Cryptocurrency and Bitcoin?
            That's too complicated for me!" But let me tell you, with the right
            guidance and strategy, you can turn these volatile assets into a
            profitable venture.
          </p>
          <span>Read more</span>
        </div>
        <div className="content-image">
          <div className="gradient"></div>
          <img src={CourseImage} alt="" />
          <button>
            Play video{" "}
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.3335 6H14.6668M14.6668 6L9.66683 1M14.6668 6L9.66683 11"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="content-info">
          <h3>what you will get</h3>
          <h4>Course let you</h4>

          <div className="content-info__blocks">
            <div className="block">
              <div>
                <img src={SmartContactImage} alt="" />
                <h5>Smart Contract</h5>
              </div>
              <p>
                Our project is a web 3.0 platform that combines blockchain,
                cryptocurrency, and smart contracts technologies
              </p>
            </div>
            <div className="block">
              <div>
                <img src={SmartContactImage} alt="" />
                <h5>Smart Contract</h5>
              </div>
              <p>
                Our project is a web 3.0 platform that combines blockchain,
                cryptocurrency, and smart contracts technologies
              </p>
            </div>
            <div className="block">
              <div>
                <img src={SmartContactImage} alt="" />
                <h5>Smart Contract</h5>
              </div>
              <p>
                Our project is a web 3.0 platform that combines blockchain,
                cryptocurrency, and smart contracts technologies
              </p>
            </div>
            <div className="block">
              <div>
                <img src={SmartContactImage} alt="" />
                <h5>Smart Contract</h5>
              </div>
              <p>
                Our project is a web 3.0 platform that combines blockchain,
                cryptocurrency, and smart contracts technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentTools;
