import React from "react";
//react-router
import { Link } from "react-router-dom";
//styles
import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="main-btn-cont">
        <Link to="/smash-button-game">
          <button className="main-btn gold"></button>
        </Link>
        <Link to="/scratch-game">
          <button className="main-btn blue"></button>
        </Link>
      </div>
      <h1 className="main-title text">yambo</h1>
    </div>
  );
};

export default Main;
