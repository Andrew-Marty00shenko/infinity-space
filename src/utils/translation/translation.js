import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import headerHi from "../../translations/hi/headerHindi.json";
import headerEn from "../../translations/en/headerEn.json";
import headerPt from "../../translations/pt/headerPt.json";

import landingHi from "../../translations/hi/landingHindi.json";
import landingEn from "../../translations/en/landingEn.json";
import landingPt from "../../translations/pt/landingPt.json";

import sliderHi from "../../translations/hi/sliderHindi.json";
import sliderEn from "../../translations/en/sliderEn.json";
import sliderPt from "../../translations/pt/sliderPt.json";

import dashboardSectionHi from "../../translations/hi/dashboardSectionHindi.json";
import dashboardSectionEn from "../../translations/en/dashboardSectionEn.json";
import dashboardSectionPt from "../../translations/pt/dashboardSectionPt.json";

import globalHi from "../../translations/hi/globalHindi.json";
import globalEn from "../../translations/en/globalEn.json";
import globalPt from "../../translations/pt/globalPt.json";

import faqHi from "../../translations/hi/faqHindi.json";
import faqEn from "../../translations/en/faqEn.json";
import faqPt from "../../translations/pt/faqPt.json";

import modalRegisterHi from "../../translations/hi/modalRegisterHindi.json";
import modalRegisterEn from "../../translations/en/modalRegisterEn.json";
import modalRegisterPt from "../../translations/pt/modalRegisterPt.json";

import footerHi from "../../translations/hi/footerHindi.json";
import footerEn from "../../translations/en/footerEn.json";
import footerPt from "../../translations/pt/footerPt.json";

import sidebarHi from "../../translations/hi/sidebarHi.json";
import sidebarEn from "../../translations/en/sidebarEn.json";
import sidebarPt from "../../translations/pt/sidebarPt.json";

import dashboardHi from "../../translations/hi/dashboardHindi.json";
import dashboardEn from "../../translations/en/dashboardEn.json";
import dashboardPt from "../../translations/pt/dashboardPt.json";

import transactionsHi from "../../translations/hi/transactionsHindi.json";
import transactionsEn from "../../translations/en/transactionsEn.json";
import transactionsPt from "../../translations/pt/transactionsPt.json";

import teamHi from "../../translations/hi/teamHindi.json";
import teamEn from "../../translations/en/teamEn.json";
import teamPt from "../../translations/pt/teamPt.json";

import linksHi from "../../translations/hi/linksHindi.json";
import linksEn from "../../translations/en/linksEn.json";
import linksPt from "../../translations/pt/linksPt.json";

import statsHi from "../../translations/hi/statsHindi.json";
import statsEn from "../../translations/en/statsEn.json";
import statsPt from "../../translations/pt/statsPt.json";

import presentationHi from "../../translations/hi/presentationHindi.json";
import presentationEn from "../../translations/en/presentationEn.json";
import presentationPt from "../../translations/pt/presentationPt.json";

import levelsHi from "../../translations/hi/levelsHi.json";
import levelsEn from "../../translations/en/levelsEn.json";
import levelsPt from "../../translations/pt/levelsPt.json";

import contactsHi from "../../translations/hi/contactsHindi.json";
import contactsEn from "../../translations/en/contactsEn.json";
import contactsPt from "../../translations/pt/contactsPt.json";

import privacyPolicyHi from "../../translations/hi/privacyPolicyHindi.json";
import privacyPolicyEn from "../../translations/en/privacyPolicyEn.json";
import privacyPolicyPt from "../../translations/pt/privacyPolicyPt.json";

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
    levels: levelsHi,
    contacts: contactsHi,
    privacyPolicy: privacyPolicyHi,
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
    levels: levelsEn,
    contacts: contactsEn,
    privacyPolicy: privacyPolicyEn,
  },
  PT: {
    landing: landingPt,
    header: headerPt,
    slider: sliderPt,
    dashboardSection: dashboardSectionPt,
    global: globalPt,
    faq: faqPt,
    footer: footerPt,
    modalRegister: modalRegisterPt,
    sidebar: sidebarPt,
    dashboard: dashboardPt,
    transactions: transactionsPt,
    team: teamPt,
    links: linksPt,
    stats: statsPt,
    presentation: presentationPt,
    levels: levelsPt,
    contacts: contactsPt,
    privacyPolicy: privacyPolicyPt,
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
    : navigator.language.includes("PT") || navigator.language.includes("pt")
    ? "PT"
    : "EN",
  interpolation: { escapeValue: false },
});

export default i18n;
