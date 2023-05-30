import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { isWebpSupported } from "react-image-webp/dist/utils";

import { connectWallet } from "../../../utils/contract/contract";
import { loginUser } from "../../../redux/slices/userSlice";

import Macbook from "../../../assets/images/dashboard-section/macbook.png";
import Moon from "../../../assets/images/dashboard-section/moon.png";
import Bnb from "../../../assets/images/dashboard-section/bnb.png";

import ModalRegister from "../ModalRegister/ModalRegister";

import DashboardLaptop from "../../../assets/images/laptop-desktop.png";
import DashboardLaptopWebp from "../../../assets/images/laptop-desktop.webp";
import DashboardLaptopopTablet from "../../../assets/images/dashboard-laptop-tablet.png";
import DashboardLaptopopTabletWebp from "../../../assets/images/dashboard-laptop-tablet.webp";
import DashboardLaptopopMobile from "../../../assets/images/mobile-laptop.png";
import DashboardLaptopopMobileWebp from "../../../assets/images/mobile-laptop.webp";

import "./DashboardSection.scss";
import { useTranslation } from "react-i18next";

const DashboardSection = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

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
    <section className="dashboard-section">
      <div className="gradient"></div>
      <div className="dashboard-section__title">
        <h2>Ergonomic dashboard</h2>
        <p>
          In your personal cabinet you will clearly see what`s going on with all
          your indicators and partners
        </p>
      </div>

      <div className="dashboard-section__buttons">
        <button>Sign up</button>
        <button>Log in</button>
      </div>

      <div className="dashboard-section__images">
        <img className="macbook" src={Macbook} alt="" />
        <img className="moon" src={Moon} alt="" />
        <img className="bnb-big" src={Bnb} alt="" />
        <img className="bnb-small" src={Bnb} alt="" />
      </div>
    </section>
  );
};

export default DashboardSection;
