import React from "react";
//components
import { Token } from "../../components/MoreGames/Token/Token";
import { Game } from "../../components/MoreGames/Game/Game";
//react-router
import { Link } from "react-router-dom";
//style
import "./moreGames.scss";

const MoreGames = () => {
  return (
    <div className="more-games">
      <p className="text mg-title mg-t-m">Your Tokens</p>
      <Token />
      <p className="text mg-title">Explore Other Games</p>
      <div className="mg-cont">
        <Game />
        <Game />
        <Game />
      </div>
      <p className="text mg-foo">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          See More...
        </Link>
      </p>
    </div>
  );
};

export default MoreGames;
