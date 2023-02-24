import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import { loginUser } from "../../../redux/slices/userSlice";
import { connectWallet } from "../../../utils/contract/contract";
import ModalRegister from "../ModalRegister/ModalRegister";

import EnIcon from "../../../assets/images/en.svg";
import HiIcon from "../../../assets/images/hi.svg";
import PtIcon from "../../../assets/images/pt.svg";
import BrIcon from "../../../assets/images/br.svg";
import Logo from "../../../assets/images/logo.png";

import "./LandingHeader.scss";
import classNames from "classnames";

const languages = [
  {
    id: 1,
    name: "English",
    abr: "EN",
    icon: EnIcon,
  },
  {
    id: 2,
    name: "हिंदी",
    abr: "HI",
    icon: HiIcon,
  },
  {
    id: 3,
    name: "Português",
    abr: "PT",
    icon: PtIcon,
  },
  {
    id: 4,
    name: "Brasil",
    abr: "PT",
    icon: BrIcon,
  },
  // {
  //     id: 3,
  //     name: 'Український',
  //     abr: 'UA',
  //     icon: <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <rect x="0.5" y="7.33569" width="16.0878" height="16.0878" rx="2.34797" stroke="black" />
  //         <path d="M4 13.2937L9.14074 18.4344L21.0848 3.79091" stroke="black" strokeWidth="1.5" />
  //     </svg>
  // },
  // {
  //     id: 4,
  //     name: 'Deutsch',
  //     abr: 'DE',
  //     icon: <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <rect x="0.5" y="7.33569" width="16.0878" height="16.0878" rx="2.34797" stroke="black" />
  //         <path d="M4 13.2937L9.14074 18.4344L21.0848 3.79091" stroke="black" strokeWidth="1.5" />
  //     </svg>
  // }
];

const LandingHeader = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const [windowWidth, setWindowWidth] = useState();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [uplineId, setUplineId] = useState("");
  const [activeLanguage, setActiveLanguage] = useState({
    name: "",
    abr: null,
    icon: null,
  });
  const [openLanguagesMenu, setOpenLanguagesMenu] = useState(false);

  useEffect(() => {
    const indexLanguage = languages.findIndex(
      (lang) => lang.abr === i18n.language
    );
    setActiveLanguage({
      name: languages[indexLanguage]?.name,
      abr: languages[indexLanguage]?.abr,
      icon: languages[indexLanguage]?.icon,
    });
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    i18n.changeLanguage(activeLanguage.abr);
  }, [activeLanguage.abr]);

  useEffect(() => {
    if (searchParams.get("user_id") !== null) {
      setShowModalRegister(true);
      setUplineId(searchParams.get("user_id"));
    } else {
      setUplineId("");
    }
  }, [location]);

  const handleChangeLanguage = (name, abr, icon) => {
    setActiveLanguage({
      name,
      abr,
      icon,
    });
    setOpenLanguagesMenu(false);
  };

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
    <header className="landing-header">
      <div className="landing-header__block">
        <div className="landing-header__logo">
          <img src={Logo} alt="logo" />
          Infinity Space
        </div>
        <div className="landing-header__block-info">
          {location.pathname === "/" ? (
            <>
              <p>{t("header:header_comunity")}</p>
              <div className="contract-info">
                Infinity Space
                <span>
                  <a
                    href="https://bscscan.com/address/0xB1Bc72552418418a2e0D098D00E6C72e674E0dbf"
                    target="_blank"
                  >
                    0xB1Bc...0dbf
                  </a>
                </span>
              </div>
            </>
          ) : null}
        </div>
        <div className="landing-header__block-login-btns">
          <div
            className="active-language"
            onClick={() => setOpenLanguagesMenu(!openLanguagesMenu)}
          >
            <img src={activeLanguage.icon} alt="" />
            {windowWidth > 690 ? activeLanguage.name : " "}
            <svg
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.75L5 5.25L8.5 1.75"
                stroke="#717275"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <Link to="/">
            <button onClick={handleClickConnectWallet} disabled={loading}>
              {loading ? t("global:loading") : t("header:header_connect_btn")}
            </button>
          </Link>

          {openLanguagesMenu && (
            <ul className="languages__menu">
              {languages.map((lang) => {
                return (
                  <li
                    className={classNames({
                      active: activeLanguage?.name === lang.name,
                    })}
                    key={lang.id}
                    onClick={() =>
                      handleChangeLanguage(lang.name, lang.abr, lang.icon)
                    }
                  >
                    <img src={lang.icon} alt="" />

                    <span>{lang.name}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <ModalRegister
        showModalRegister={showModalRegister}
        setShowModalRegister={setShowModalRegister}
        uplineId={uplineId}
        setUplineId={setUplineId}
      />
    </header>
  );
};

export default LandingHeader;
