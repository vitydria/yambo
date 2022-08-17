import React from "react";
//react-router
import { Link } from "react-router-dom";
//seo
import { Helmet } from "react-helmet";
//styles
import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <Helmet>
        <meta
          name="description"
          content="Yambo is an app to share with your friends and followers, send prizes and more"
        />
        <title>Yambo</title>
      </Helmet>
      <div className="main-btn-cont">
        <Link to="/smash-button-game">
          <button className="main-btn gold"></button>
        </Link>
        <Link to="/scratch-game">
          <button className="main-btn blue"></button>
        </Link>
        <Link to="/create-game">
          <button className="main-btn green"></button>
        </Link>
      </div>
      <h1 className="main-title text">yambo</h1>
    </div>
  );
};

export default Main;
