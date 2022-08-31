import React from "react";
//hooks
import { useSettingsContext } from "../../../hooks/useSettingsContext";
import { baseUrl } from "../../../utils/url";
//utils

//styles
import "./token.scss";

export const Token = () => {
  const { settings } = useSettingsContext();
  const { images, index } = settings;

  return (
    <div className="token-cont">
      <img
        className="token-img"
        alt="Token sent"
        src={`${baseUrl}${images[index]}`}
      />
      <div className="token-txt-cont">
        <p className="text m">Token #298</p>
        <p className="text m">@taylorswift</p>
        <p className="text m">03/15/2022</p>
      </div>
    </div>
  );
};
