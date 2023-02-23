import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";

import "./utils/translation/translation";

import Routes from "./routes/Routes";

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    localStorage.setItem("language", i18n.language);
  }, [i18n.language]);

  return (
    <div className="wrapper">
      <Routes />
      <ToastContainer />
    </div>
  );
};

export default App;
