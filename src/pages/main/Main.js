import { useEffect } from "react";
//react-router
import { useSearchParams, useNavigate } from "react-router-dom";
//hooks
import { useSettingsContext } from "../../hooks/useSettingsContext.js";
//seo
import { Helmet } from "react-helmet";
//utils
import getQueryParams from "../../utils/queryparams";
import { navigateTo } from "../../utils/navigateTo.js";
//styles
import "./main.scss";
import { useFormContext } from "../../hooks/useFormContext.js";
import { useOverflow } from "../../hooks/useOverflow.js";

const Main = () => {
  const [searchParams] = useSearchParams();
  const { settings, setSettings } = useSettingsContext();
  const { resetProvider } = useFormContext();

  let navigate = useNavigate();
  useOverflow();

  useEffect(() => {
    resetProvider();
    setSettings(getQueryParams(searchParams));
  }, []);

  useEffect(() => {
    if (settings.game === "unset") {
      navigateTo("/create-game", navigate);
    }

    if (settings.game === "1") {
      navigateTo("/scratch-game", navigate);
    }

    return () => {
      if (navigateTo) {
        clearTimeout(navigateTo);
      }
    };
  }, [settings]);

  return (
    <div className="main">
      <Helmet>
        <meta
          name="description"
          content="Yambo is an app to share with your friends and followers, send prizes and more"
        />
        <title>Yambo</title>
      </Helmet>
      <h1 className="main-title text">yambo</h1>
    </div>
  );
};

export default Main;
