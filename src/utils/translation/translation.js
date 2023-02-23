import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import headerHi from "../../translations/hi/headerHindi.json";
import headerEn from "../../translations/en/headerEn.json";

import landingHi from "../../translations/hi/landingHindi.json";
import landingEn from "../../translations/en/landingEn.json";

import sliderHi from "../../translations/hi/sliderHindi.json";
import sliderEn from "../../translations/en/sliderEn.json";

import dashboardSectionHi from "../../translations/hi/dashboardSectionHindi.json";
import dashboardSectionEn from "../../translations/en/dashboardSectionEn.json";

import globalHi from "../../translations/hi/globalHindi.json";
import globalEn from "../../translations/en/globalEn.json";

import faqHi from "../../translations/hi/faqHindi.json";
import faqEn from "../../translations/en/faqEn.json";

import modalRegisterHi from "../../translations/hi/modalRegisterHindi.json";
import modalRegisterEn from "../../translations/en/modalRegisterEn.json";

import footerHi from "../../translations/hi/footerHindi.json";
import footerEn from "../../translations/en/footerEn.json";

import sidebarHi from "../../translations/hi/sidebarHi.json";
import sidebarEn from "../../translations/en/sidebarEn.json";

import dashboardHi from "../../translations/hi/dashboardHindi.json";
import dashboardEn from "../../translations/en/dashboardEn.json";

import transactionsHi from "../../translations/hi/transactionsHindi.json";
import transactionsEn from "../../translations/en/transactionsEn.json";

import teamHi from "../../translations/hi/teamHindi.json";
import teamEn from "../../translations/en/teamEn.json";

import linksHi from "../../translations/hi/linksHindi.json";
import linksEn from "../../translations/en/linksEn.json";

import statsHi from "../../translations/hi/statsHindi.json";
import statsEn from "../../translations/en/statsEn.json";

import presentationHi from "../../translations/hi/presentationHindi.json";
import presentationEn from "../../translations/en/presentationEn.json";

const resources = {
  HI: {
    landing: landingHi,
    header: headerHi,
    slider: sliderHi,
    dashboardSection: dashboardSectionHi,
    global: globalHi,
    faq: faqHi,
    footer: footerHi,
    modalRegister: modalRegisterHi,
    sidebar: sidebarHi,
    dashboard: dashboardHi,
    transactions: transactionsHi,
    team: teamHi,
    links: linksHi,
    stats: statsHi,
    presentation: presentationHi,
  },
  EN: {
    landing: landingEn,
    header: headerEn,
    slider: sliderEn,
    dashboardSection: dashboardSectionEn,
    global: globalEn,
    faq: faqEn,
    footer: footerEn,
    modalRegister: modalRegisterEn,
    sidebar: sidebarEn,
    dashboard: dashboardEn,
    transactions: transactionsEn,
    team: teamEn,
    links: linksEn,
    stats: statsEn,
    presentation: presentationEn,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language")
    ? localStorage.getItem("language")
    : navigator.language.includes("EN") || navigator.language.includes("en")
    ? "EN"
    : navigator.language.includes("HI") || navigator.language.includes("hi")
    ? "HI"
    : "EN",
  interpolation: { escapeValue: false },
});

export default i18n;
