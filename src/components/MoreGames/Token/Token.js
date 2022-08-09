import React from "react";
//styles
import "./token.scss";

export const Token = () => {
  return (
    <div className="token-cont">
      <img
        className="token-img"
        alt="Token sent"
        src="https://i1.sndcdn.com/avatars-000500544273-6kcyh0-t500x500.jpg"
      />
      <div className="token-txt-cont">
        <p className="text m">Token #298</p>
        <p className="text m">@taylorswift</p>
        <p className="text m">03/15/2022</p>
      </div>
    </div>
  );
};
