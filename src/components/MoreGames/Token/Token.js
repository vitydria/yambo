import React from "react";
//styles
import "./token.scss";

export const Token = () => {
  return (
    <div className="token-cont">
      <image className="token-img" />
      <div className="token-txt-cont">
        <p className="text m">Token #298</p>
        <p className="text m">@taylorswift</p>
        <p className="text m">03/15/2022</p>
      </div>
    </div>
  );
};
