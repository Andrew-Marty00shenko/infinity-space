import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

import AllTransactions from "../AllTransactions/AllTransactions";
import { getUserData } from "../../../redux/slices/userSlice";
import { getLevelsInfo } from "../../../redux/slices/levelsSlice";

import "./Main.scss";
import { useState } from "react";
import apiUser from "../../../api/apiServer/apiUser";
import { useTranslation } from "react-i18next";

import BoyImage from "../../../assets/images/boy.png";
import StatsModal from "../../Modals/StatsModal/StatsModal";
import ProgramImage from "../../../assets/images/dashboard/main/program.png";

const data = [
  {
    name: "Page A",
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: "Page B",
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2480,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 1500,
    pv: 4300,
    amt: 2100,
  },
];

const Main = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [openModalStats, setOpenModalStats] = useState(false);
  const [userData, setUserData] = useState(null);

  const levels = useSelector((state) => state.levels.levels);
  const user = useSelector((state) => state.user.user);
  const wallet = useSelector((state) => state.user.wallet);
  const slicedAddressWallet =
    wallet.substring(0, 5) +
    "..." +
    wallet.substring(wallet.length - 5, wallet.length);

  let timeStamp = Number(user?.userData.regDate);
  let dateFormat = new Date(timeStamp * 1000);
  let registerDate =
    dateFormat.getDate() +
    "." +
    (dateFormat.getMonth() + 1) +
    "." +
    dateFormat.getFullYear();

  let activatedAccount =
    user?.userData.earned !== "0" && user?.userData.ratio === "0";
  let activatedLevels = levels?.filter((level) => level.status === true);
  let pricesActivatedLevels = activatedLevels?.map((level) => level.price);
  let totalSumActivatedLevels = null;

  for (let i = 0; i < pricesActivatedLevels?.length; i++) {
    let price = pricesActivatedLevels[i] / 1e18;
    totalSumActivatedLevels += price;
  }

  useEffect(() => {
    dispatch(getUserData(wallet));
  }, []);

  useEffect(() => {
    if (user !== null) {
      apiUser
        .getUserData(user?.id)
        .then(({ data }) => setUserData(data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  useEffect(() => {
    dispatch(getLevelsInfo(user?.id));
  }, [user]);

  const handleCopy = (num) => {
    if (num === 1) {
      toast.success(t("global:personal-link-copied"), { autoClose: 1000 });
    } else {
      toast.success(t("global:address-copied"), { autoClose: 1000 });
    }
  };

  return (
    <>
      <div className="main">
        <div className="background-gradient"></div>

        <div className="main-info">
          <div className="main-info__tab">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.29701 5.2338C3.52243 4.27279 4.27279 3.52243 5.2338 3.29701V3.29701C6.06663 3.10165 6.93337 3.10165 7.7662 3.29701V3.29701C8.72721 3.52243 9.47757 4.27279 9.70299 5.2338V5.2338C9.89835 6.06663 9.89835 6.93337 9.70299 7.7662V7.7662C9.47757 8.72721 8.72721 9.47757 7.7662 9.70299V9.70299C6.93337 9.89835 6.06663 9.89835 5.2338 9.70299V9.70299C4.27279 9.47757 3.52243 8.72721 3.29701 7.7662V7.7662C3.10166 6.93337 3.10166 6.06663 3.29701 5.2338V5.2338Z"
                stroke="#AE7AFF"
                stroke-width="1.5"
              />
              <path
                d="M3.29701 16.2338C3.52243 15.2728 4.27279 14.5224 5.2338 14.297V14.297C6.06663 14.1017 6.93337 14.1017 7.7662 14.297V14.297C8.72721 14.5224 9.47757 15.2728 9.70299 16.2338V16.2338C9.89835 17.0666 9.89835 17.9334 9.70299 18.7662V18.7662C9.47757 19.7272 8.72721 20.4776 7.7662 20.703V20.703C6.93337 20.8983 6.06663 20.8983 5.2338 20.703V20.703C4.27279 20.4776 3.52243 19.7272 3.29701 18.7662V18.7662C3.10166 17.9334 3.10166 17.0666 3.29701 16.2338V16.2338Z"
                stroke="#AE7AFF"
                stroke-width="1.5"
              />
              <path
                d="M14.297 5.2338C14.5224 4.27279 15.2728 3.52243 16.2338 3.29701V3.29701C17.0666 3.10165 17.9334 3.10165 18.7662 3.29701V3.29701C19.7272 3.52243 20.4776 4.27279 20.703 5.2338V5.2338C20.8983 6.06663 20.8983 6.93337 20.703 7.7662V7.7662C20.4776 8.72721 19.7272 9.47757 18.7662 9.70299V9.70299C17.9334 9.89835 17.0666 9.89835 16.2338 9.70299V9.70299C15.2728 9.47757 14.5224 8.72721 14.297 7.7662V7.7662C14.1017 6.93337 14.1017 6.06663 14.297 5.2338V5.2338Z"
                stroke="#AE7AFF"
                stroke-width="1.5"
              />
              <path
                d="M14.297 16.2338C14.5224 15.2728 15.2728 14.5224 16.2338 14.297V14.297C17.0666 14.1017 17.9334 14.1017 18.7662 14.297V14.297C19.7272 14.5224 20.4776 15.2728 20.703 16.2338V16.2338C20.8983 17.0666 20.8983 17.9334 20.703 18.7662V18.7662C20.4776 19.7272 19.7272 20.4776 18.7662 20.703V20.703C17.9334 20.8983 17.0666 20.8983 16.2338 20.703V20.703C15.2728 20.4776 14.5224 19.7272 14.297 18.7662V18.7662C14.1017 17.9334 14.1017 17.0666 14.297 16.2338V16.2338Z"
                stroke="#AE7AFF"
                stroke-width="1.5"
              />
            </svg>
            Dashboard
          </div>

          <div className="main-info__user">
            <img className="boy" src={BoyImage} alt="boy" />

            <div className="user-info">
              <span>ID 267</span>
              <span>invited 24 users</span>
            </div>
            <div className="user-info">
              <span>01.06.2022 “by id169” </span>
              <span>Joined</span>
            </div>
          </div>
        </div>

        <div className="main__popup">
          <h3>INFORMATION</h3>
          <h4>Balance</h4>

          <div className="main__popup-circles">
            <div className="circle red"></div>
            <div className="circle orange"></div>
            <div className="circle yellow"></div>
            <div className="circle purple"></div>
            <div className="circle blue"></div>
            <div className="circle lightblue"></div>
            <div className="circle green"></div>
            <div className="circle pink"></div>
          </div>

          <div className="main__popup-items">
            <div className="item">
              <div className="item-block">
                <div className="item-color blue"></div>
                <p className="item-name">Environment</p>
              </div>
              <div className="item-stats">
                <p>15,5%</p>
                <p>$234,54</p>
              </div>
            </div>
            <div className="item">
              <div className="item-block">
                <div className="item-color green"></div>
                <p className="item-name">Health</p>
              </div>
              <div className="item-stats">
                <p>15,5%</p>
                <p>$234,54</p>
              </div>
            </div>
            <div className="item">
              <div className="item-block">
                <div className="item-color pink"></div>
                <p className="item-name">Relationships </p>
              </div>
              <div className="item-stats">
                <p>15,5%</p>
                <p>$234,54</p>
              </div>
            </div>
          </div>

          <div className="main__popup-button">
            <button onClick={() => setOpenModalStats(true)}>View all</button>
          </div>

          <div className="main__popup-info">
            <h4>INFORMATION</h4>
            <p>Your data</p>

            <div className="info-item">
              <div className="info-title">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99992 6.99992C8.84159 6.99992 10.3333 5.50825 10.3333 3.66659C10.3333 1.82492 8.84159 0.333252 6.99992 0.333252C5.15825 0.333252 3.66659 1.82492 3.66659 3.66659C3.66659 5.50825 5.15825 6.99992 6.99992 6.99992ZM6.99992 8.66659C4.77492 8.66659 0.333252 9.78325 0.333252 11.9999V13.6666H13.6666V11.9999C13.6666 9.78325 9.22492 8.66659 6.99992 8.66659Z"
                    fill="white"
                  />
                </svg>
                Name
              </div>
              <p>Arman Jennickson</p>
            </div>

            <div className="info-item">
              <div className="info-title">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99992 6.99992C8.84159 6.99992 10.3333 5.50825 10.3333 3.66659C10.3333 1.82492 8.84159 0.333252 6.99992 0.333252C5.15825 0.333252 3.66659 1.82492 3.66659 3.66659C3.66659 5.50825 5.15825 6.99992 6.99992 6.99992ZM6.99992 8.66659C4.77492 8.66659 0.333252 9.78325 0.333252 11.9999V13.6666H13.6666V11.9999C13.6666 9.78325 9.22492 8.66659 6.99992 8.66659Z"
                    fill="white"
                  />
                </svg>
                Date of birth
              </div>
              <p>02/09/1999</p>
            </div>

            <div className="info-item">
              <div className="info-title">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99992 6.99992C8.84159 6.99992 10.3333 5.50825 10.3333 3.66659C10.3333 1.82492 8.84159 0.333252 6.99992 0.333252C5.15825 0.333252 3.66659 1.82492 3.66659 3.66659C3.66659 5.50825 5.15825 6.99992 6.99992 6.99992ZM6.99992 8.66659C4.77492 8.66659 0.333252 9.78325 0.333252 11.9999V13.6666H13.6666V11.9999C13.6666 9.78325 9.22492 8.66659 6.99992 8.66659Z"
                    fill="white"
                  />
                </svg>
                Place of birth
              </div>
              <p>Ukraine</p>
            </div>

            <div className="info-item">
              <div className="info-title">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99992 6.99992C8.84159 6.99992 10.3333 5.50825 10.3333 3.66659C10.3333 1.82492 8.84159 0.333252 6.99992 0.333252C5.15825 0.333252 3.66659 1.82492 3.66659 3.66659C3.66659 5.50825 5.15825 6.99992 6.99992 6.99992ZM6.99992 8.66659C4.77492 8.66659 0.333252 9.78325 0.333252 11.9999V13.6666H13.6666V11.9999C13.6666 9.78325 9.22492 8.66659 6.99992 8.66659Z"
                    fill="white"
                  />
                </svg>
                Sex
              </div>
              <p>Male</p>
            </div>
          </div>

          <div className="main__popup-button-edit">
            <button>
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8601 3.07866L14.7869 2.15178C16.3226 0.616074 18.8125 0.616074 20.3482 2.15178C21.8839 3.68748 21.8839 6.17735 20.3482 7.71306L19.4213 8.63993M13.8601 3.07866C13.8601 3.07866 13.9759 5.04828 15.7138 6.78618C17.4517 8.52407 19.4213 8.63993 19.4213 8.63993M13.8601 3.07866L5.33882 11.5999C4.76166 12.1771 4.47308 12.4656 4.2249 12.7838C3.93213 13.1592 3.68114 13.5653 3.47634 13.995C3.30273 14.3593 3.17368 14.7465 2.91556 15.5208L1.82181 18.8021M19.4213 8.63993L10.9001 17.1612C10.3229 17.7383 10.0344 18.0269 9.71616 18.2751C9.34082 18.5679 8.93469 18.8189 8.50498 19.0237C8.1407 19.1973 7.75352 19.3263 6.97918 19.5844L3.69792 20.6782M3.69792 20.6782L2.89584 20.9456C2.51478 21.0726 2.09466 20.9734 1.81063 20.6894C1.5266 20.4053 1.42743 19.9852 1.55445 19.6042L1.82181 18.8021M3.69792 20.6782L1.82181 18.8021"
                  stroke="#717275"
                  stroke-width="1.5"
                />
              </svg>
              Edit{" "}
            </button>
          </div>
        </div>

        <div className="main__user">
          <div className="main__user-link-block">
            <div>
              <p className="title">Personal link</p>
              <p className="link">InfinitySpace.io/b/ob2oe5</p>
            </div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66675 13.3334V15.6667C6.66675 16.6002 6.66675 17.0669 6.8484 17.4234C7.00819 17.737 7.26316 17.992 7.57676 18.1518C7.93328 18.3334 8.39999 18.3334 9.33341 18.3334H15.6667C16.6002 18.3334 17.0669 18.3334 17.4234 18.1518C17.737 17.992 17.992 17.737 18.1518 17.4234C18.3334 17.0669 18.3334 16.6002 18.3334 15.6667V9.33341C18.3334 8.39999 18.3334 7.93328 18.1518 7.57676C17.992 7.26316 17.737 7.00819 17.4234 6.8484C17.0669 6.66675 16.6002 6.66675 15.6667 6.66675H13.3334M4.33341 13.3334H10.6667C11.6002 13.3334 12.0669 13.3334 12.4234 13.1518C12.737 12.992 12.992 12.737 13.1518 12.4234C13.3334 12.0669 13.3334 11.6002 13.3334 10.6667V4.33341C13.3334 3.39999 13.3334 2.93328 13.1518 2.57676C12.992 2.26316 12.737 2.00819 12.4234 1.8484C12.0669 1.66675 11.6002 1.66675 10.6667 1.66675H4.33341C3.39999 1.66675 2.93328 1.66675 2.57676 1.8484C2.26316 2.00819 2.00819 2.26316 1.8484 2.57676C1.66675 2.93328 1.66675 3.39999 1.66675 4.33341V10.6667C1.66675 11.6002 1.66675 12.0669 1.8484 12.4234C2.00819 12.737 2.26316 12.992 2.57676 13.1518C2.93328 13.3334 3.39999 13.3334 4.33341 13.3334Z"
                stroke="#AE7AFF"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="main__user-program">
            <h2>Program</h2>

            <div className="program-block">
              <div className="line">
                <div className="line-gradient"></div>
              </div>
              <div className="gradient"></div>
              <img src={ProgramImage} alt="" />
              <h3>IN SPACE</h3>
              <p>11 920 BUSD</p>
              <button>Let`s go</button>
            </div>
          </div>
        </div>

        <AllTransactions />

        {/* <div className="main-info">
        <Container fluid>
          <Row>
            <Col xl={5}>
              <div className="main-info__user-card">
                <div className="user-card__top">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="60"
                      height="60"
                      rx="30"
                      fill="white"
                      fillOpacity="0.15"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M37.0587 23.7214C37.0587 27.6374 33.9189 30.7775 30.0001 30.7775C26.0826 30.7775 22.9414 27.6374 22.9414 23.7214C22.9414 19.8054 26.0826 16.6667 30.0001 16.6667C33.9189 16.6667 37.0587 19.8054 37.0587 23.7214ZM29.9997 43.3333C24.2162 43.3333 19.333 42.3933 19.333 38.7666C19.333 35.1386 24.2469 34.2319 29.9997 34.2319C35.7845 34.2319 40.6663 35.1719 40.6663 38.7986C40.6663 42.4267 35.7525 43.3333 29.9997 43.3333Z"
                      fill="#AFC6FF"
                    />
                  </svg>
                  <div>
                    <p>ID {user?.userData.userId || 0}</p>
                    <span>
                      {t("dashboard:invited")} {user?.userData.refCount || 0}{" "}
                      {t("dashboard:users")}{" "}
                    </span>
                  </div>
                </div>
                <div className="user-card__bottom">
                  {t("dashboard:joined-by")}{" "}
                  {user?.userData.regDate !== "0" ? registerDate : " "}{" "}
                  {`“by id${user?.userData.partnerId || 0}”`}
                </div>
              </div>
            </Col>
            <Col xl={7} className="link">
              <div className="main-info__user-link">
                <div>
                  <div>
                    <div className="user-link__top">
                      {t("dashboard:personal-link")}
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>
                            {t("dashboard:personal-link-tooltip")} <br />
                            {t("dashboard:personal-link-tooltip-2")}
                          </Tooltip>
                        }
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.77231 2.50777C8.23755 2.16408 9.76245 2.16408 11.2277 2.50777C13.3437 3.00412 14.9959 4.65631 15.4922 6.77231C15.8359 8.23755 15.8359 9.76245 15.4922 11.2277C14.9959 13.3437 13.3437 14.9959 11.2277 15.4922C9.76245 15.8359 8.23755 15.8359 6.77231 15.4922C4.65631 14.9959 3.00412 13.3437 2.50777 11.2277C2.16408 9.76245 2.16408 8.23755 2.50777 6.77231C3.00412 4.65631 4.65631 3.00412 6.77231 2.50777ZM8.99998 7.56405C9.3965 7.56405 9.71795 7.24261 9.71795 6.84609C9.71795 6.44957 9.3965 6.12812 8.99998 6.12812C8.60346 6.12812 8.28202 6.44957 8.28202 6.84609C8.28202 7.24261 8.60346 7.56405 8.99998 7.56405ZM8.99998 8.10252C9.29737 8.10252 9.53845 8.34361 9.53845 8.641V11.5129C9.53845 11.8102 9.29737 12.0513 8.99998 12.0513C8.70259 12.0513 8.46151 11.8102 8.46151 11.5129V8.641C8.46151 8.34361 8.70259 8.10252 8.99998 8.10252Z"
                            fill="#BFBFC1"
                          />
                        </svg>
                      </OverlayTrigger>
                    </div>
                    <div className="user-link__bottom">
                      {`in-space.io/${user?.id}`}
                    </div>
                  </div>
                  <div className="user-link__copy">
                    <CopyToClipboard
                      text={`${window.location.origin}/${user?.id}`}
                      onCopy={() => handleCopy(1)}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_38_618)">
                          <path
                            d="M6.66699 13.3333V15.6667C6.66699 16.6001 6.66699 17.0668 6.84865 17.4233C7.00844 17.7369 7.2634 17.9919 7.57701 18.1517C7.93353 18.3333 8.40024 18.3333 9.33366 18.3333H15.667C16.6004 18.3333 17.0671 18.3333 17.4236 18.1517C17.7372 17.9919 17.9922 17.7369 18.152 17.4233C18.3337 17.0668 18.3337 16.6001 18.3337 15.6667V9.33334C18.3337 8.39992 18.3337 7.93321 18.152 7.57669C17.9922 7.26308 17.7372 7.00812 17.4236 6.84833C17.0671 6.66667 16.6004 6.66667 15.667 6.66667H13.3337M4.33366 13.3333H10.667C11.6004 13.3333 12.0671 13.3333 12.4236 13.1517C12.7372 12.9919 12.9922 12.7369 13.152 12.4233C13.3337 12.0668 13.3337 11.6001 13.3337 10.6667V4.33334C13.3337 3.39992 13.3337 2.93321 13.152 2.57669C12.9922 2.26308 12.7372 2.00812 12.4236 1.84833C12.0671 1.66667 11.6004 1.66667 10.667 1.66667H4.33366C3.40024 1.66667 2.93353 1.66667 2.57701 1.84833C2.2634 2.00812 2.00844 2.26308 1.84865 2.57669C1.66699 2.93321 1.66699 3.39992 1.66699 4.33334V10.6667C1.66699 11.6001 1.66699 12.0668 1.84865 12.4233C2.00844 12.7369 2.2634 12.9919 2.57701 13.1517C2.93353 13.3333 3.40024 13.3333 4.33366 13.3333Z"
                            stroke="#AFC6FF"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_38_618">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
              <div className="main-info__user-wallet">
                {slicedAddressWallet}
                <CopyToClipboard text={wallet} onCopy={() => handleCopy(2)}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_38_599)">
                      <path
                        d="M6.66699 13.3333V15.6667C6.66699 16.6001 6.66699 17.0668 6.84865 17.4233C7.00844 17.7369 7.2634 17.9919 7.57701 18.1517C7.93353 18.3333 8.40024 18.3333 9.33366 18.3333H15.667C16.6004 18.3333 17.0671 18.3333 17.4236 18.1517C17.7372 17.9919 17.9922 17.7369 18.152 17.4233C18.3337 17.0668 18.3337 16.6001 18.3337 15.6667V9.33334C18.3337 8.39992 18.3337 7.93321 18.152 7.57669C17.9922 7.26308 17.7372 7.00812 17.4236 6.84833C17.0671 6.66667 16.6004 6.66667 15.667 6.66667H13.3337M4.33366 13.3333H10.667C11.6004 13.3333 12.0671 13.3333 12.4236 13.1517C12.7372 12.9919 12.9922 12.7369 13.152 12.4233C13.3337 12.0668 13.3337 11.6001 13.3337 10.6667V4.33334C13.3337 3.39992 13.3337 2.93321 13.152 2.57669C12.9922 2.26308 12.7372 2.00812 12.4236 1.84833C12.0671 1.66667 11.6004 1.66667 10.667 1.66667H4.33366C3.40024 1.66667 2.93353 1.66667 2.57701 1.84833C2.2634 2.00812 2.00844 2.26308 1.84865 2.57669C1.66699 2.93321 1.66699 3.39992 1.66699 4.33334V10.6667C1.66699 11.6001 1.66699 12.0668 1.84865 12.4233C2.00844 12.7369 2.2634 12.9919 2.57701 13.1517C2.93353 13.3333 3.40024 13.3333 4.33366 13.3333Z"
                        stroke="#AFC6FF"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_38_599">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </CopyToClipboard>
              </div>
            </Col>
          </Row>
          <Row className="main-info__stats">
            <Col xl={3} sm={4} xs={4}>
              <div className="main-info__stats-block">
                <div className="stats-block__top">
                  {t("dashboard:partners")}
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>{t("dashboard:partners-tooltip")}</Tooltip>
                    }
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.77231 2.50777C8.23755 2.16408 9.76245 2.16408 11.2277 2.50777C13.3437 3.00412 14.9959 4.65631 15.4922 6.77231C15.8359 8.23755 15.8359 9.76245 15.4922 11.2277C14.9959 13.3437 13.3437 14.9959 11.2277 15.4922C9.76245 15.8359 8.23755 15.8359 6.77231 15.4922C4.65631 14.9959 3.00412 13.3437 2.50777 11.2277C2.16408 9.76245 2.16408 8.23755 2.50777 6.77231C3.00412 4.65631 4.65631 3.00412 6.77231 2.50777ZM8.99998 7.56405C9.3965 7.56405 9.71795 7.24261 9.71795 6.84609C9.71795 6.44957 9.3965 6.12812 8.99998 6.12812C8.60346 6.12812 8.28202 6.44957 8.28202 6.84609C8.28202 7.24261 8.60346 7.56405 8.99998 7.56405ZM8.99998 8.10252C9.29737 8.10252 9.53845 8.34361 9.53845 8.641V11.5129C9.53845 11.8102 9.29737 12.0513 8.99998 12.0513C8.70259 12.0513 8.46151 11.8102 8.46151 11.5129V8.641C8.46151 8.34361 8.70259 8.10252 8.99998 8.10252Z"
                        fill="#BFBFC1"
                      />
                    </svg>
                  </OverlayTrigger>
                </div>
                <div className="stats-block__bottom">
                  <p>{user?.userData.refCount || 0}</p>
                  <span>+ {userData?.partnersAtLatestDay || 0}</span>
                </div>
              </div>
            </Col>
            <Col xl={3} sm={4} xs={4}>
              <div className="main-info__stats-block">
                <div className="stats-block__top">
                  {t("dashboard:team")}
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>{t("dashboard:team-tooltip")}</Tooltip>}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.77231 2.50777C8.23755 2.16408 9.76245 2.16408 11.2277 2.50777C13.3437 3.00412 14.9959 4.65631 15.4922 6.77231C15.8359 8.23755 15.8359 9.76245 15.4922 11.2277C14.9959 13.3437 13.3437 14.9959 11.2277 15.4922C9.76245 15.8359 8.23755 15.8359 6.77231 15.4922C4.65631 14.9959 3.00412 13.3437 2.50777 11.2277C2.16408 9.76245 2.16408 8.23755 2.50777 6.77231C3.00412 4.65631 4.65631 3.00412 6.77231 2.50777ZM8.99998 7.56405C9.3965 7.56405 9.71795 7.24261 9.71795 6.84609C9.71795 6.44957 9.3965 6.12812 8.99998 6.12812C8.60346 6.12812 8.28202 6.44957 8.28202 6.84609C8.28202 7.24261 8.60346 7.56405 8.99998 7.56405ZM8.99998 8.10252C9.29737 8.10252 9.53845 8.34361 9.53845 8.641V11.5129C9.53845 11.8102 9.29737 12.0513 8.99998 12.0513C8.70259 12.0513 8.46151 11.8102 8.46151 11.5129V8.641C8.46151 8.34361 8.70259 8.10252 8.99998 8.10252Z"
                        fill="#BFBFC1"
                      />
                    </svg>
                  </OverlayTrigger>
                </div>
                <div className="stats-block__bottom">
                  <p>{userData?.team || 0}</p>
                  <span>+ {userData?.TeamAtLatestDay || 0}</span>
                </div>
              </div>
            </Col>
            <Col xl={3} sm={4} xs={4}>
              <div className="main-info__stats-block pre-last">
                <div className="stats-block__top">
                  {t("dashboard:ratio")}
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>{t("dashboard:ratio-tooltip")}</Tooltip>}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.77231 2.50777C8.23755 2.16408 9.76245 2.16408 11.2277 2.50777C13.3437 3.00412 14.9959 4.65631 15.4922 6.77231C15.8359 8.23755 15.8359 9.76245 15.4922 11.2277C14.9959 13.3437 13.3437 14.9959 11.2277 15.4922C9.76245 15.8359 8.23755 15.8359 6.77231 15.4922C4.65631 14.9959 3.00412 13.3437 2.50777 11.2277C2.16408 9.76245 2.16408 8.23755 2.50777 6.77231C3.00412 4.65631 4.65631 3.00412 6.77231 2.50777ZM8.99998 7.56405C9.3965 7.56405 9.71795 7.24261 9.71795 6.84609C9.71795 6.44957 9.3965 6.12812 8.99998 6.12812C8.60346 6.12812 8.28202 6.44957 8.28202 6.84609C8.28202 7.24261 8.60346 7.56405 8.99998 7.56405ZM8.99998 8.10252C9.29737 8.10252 9.53845 8.34361 9.53845 8.641V11.5129C9.53845 11.8102 9.29737 12.0513 8.99998 12.0513C8.70259 12.0513 8.46151 11.8102 8.46151 11.5129V8.641C8.46151 8.34361 8.70259 8.10252 8.99998 8.10252Z"
                        fill="#BFBFC1"
                      />
                    </svg>
                  </OverlayTrigger>
                </div>
                <div className="stats-block__bottom">
                  <p>
                    {activatedAccount
                      ? (
                          (user?.userData.earned /
                            1e18 /
                            totalSumActivatedLevels) *
                          100
                        ).toFixed(2)
                      : parseInt(user?.userData.ratio * 100) / 100 || 0}
                    %
                  </p>
                  <span>
                    + {parseInt(userData?.ratioAtLatestDay * 100) / 100 || 0}%
                  </span>
                </div>
              </div>
            </Col>
            <Col xl={3}>
              <div className="main-info__stats-block last">
                <div>
                  <div className="stats-block__top">
                    {t("dashboard:profits")}
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip>{t("dashboard:profits-tooltip")}</Tooltip>
                      }
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.77231 2.50777C8.23755 2.16408 9.76245 2.16408 11.2277 2.50777C13.3437 3.00412 14.9959 4.65631 15.4922 6.77231C15.8359 8.23755 15.8359 9.76245 15.4922 11.2277C14.9959 13.3437 13.3437 14.9959 11.2277 15.4922C9.76245 15.8359 8.23755 15.8359 6.77231 15.4922C4.65631 14.9959 3.00412 13.3437 2.50777 11.2277C2.16408 9.76245 2.16408 8.23755 2.50777 6.77231C3.00412 4.65631 4.65631 3.00412 6.77231 2.50777ZM8.99998 7.56405C9.3965 7.56405 9.71795 7.24261 9.71795 6.84609C9.71795 6.44957 9.3965 6.12812 8.99998 6.12812C8.60346 6.12812 8.28202 6.44957 8.28202 6.84609C8.28202 7.24261 8.60346 7.56405 8.99998 7.56405ZM8.99998 8.10252C9.29737 8.10252 9.53845 8.34361 9.53845 8.641V11.5129C9.53845 11.8102 9.29737 12.0513 8.99998 12.0513C8.70259 12.0513 8.46151 11.8102 8.46151 11.5129V8.641C8.46151 8.34361 8.70259 8.10252 8.99998 8.10252Z"
                          fill="#BFBFC1"
                        />
                      </svg>
                    </OverlayTrigger>
                  </div>
                  <div className="stats-block__bottom">
                    <p>
                      {`${(user?.userData.earned / 1e18).toLocaleString(
                        "ru"
                      )} $` || 0}
                    </p>
                    <span>+ {userData?.profitAtLatestDay / 1e18 || 0}</span>
                  </div>
                </div>
                <div className="chart">
                  <ResponsiveContainer>
                    <AreaChart
                      data={data}
                      margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#39EB8B"
                        fill="#417c5d"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="main-program">
        <div className="main-program__top">
          <h2>{t("dashboard:program")}</h2>
        </div>
        <div className="main-program__content">
          <svg
            width="549"
            height="8"
            viewBox="0 0 549 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="549" height="8" fill="white" fillOpacity="0.05" />
          </svg>
          <svg
            width="225"
            height="8"
            viewBox="0 0 225 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="225" height="8" fill="#184BFF" />
          </svg>
          <div className="elips"></div>
          <h3>IN SPACE</h3>
          <p>
            {`${(user?.userData.earned / 1e18).toLocaleString()}` || 0} BUSD
          </p>
          <Link to="/dashboard/user/levels">
            <button>{t("dashboard:lets-go")}</button>
          </Link>
        </div>
      </div>

      <AllTransactions /> */}
      </div>
      <StatsModal
        modalShow={openModalStats}
        setModalShow={() => setOpenModalStats(false)}
      />
    </>
  );
};

export default Main;
