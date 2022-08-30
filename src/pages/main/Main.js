import { useEffect } from "react";
//react-router
import { useSearchParams, useNavigate } from "react-router-dom";
//hooks
import { useSettingsContext } from "../../hooks/useSettingsContext.js";
//seo
import { Helmet } from "react-helmet";
//utils
import getQueryParams from "../../utils/queryparams";
//styles
import "./main.scss";

const Main = () => {
  localStorage.clear();
  const [searchParams] = useSearchParams();
  const gameSettings = getQueryParams(searchParams);
  const { settings, setSettings } = useSettingsContext();
  let navigate = useNavigate();

  useEffect(() => {
    setSettings(gameSettings);
  }, []);

  useEffect(() => {
    let timer;

    if (settings.game === "unset") {
      timer = setTimeout(() => {
        navigate("/create-game", { replace: true });
      }, 500);
    }

    if (settings.game === "1") {
      timer = setTimeout(() => {
        navigate("/scratch-game", { replace: true });
      }, 500);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
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
