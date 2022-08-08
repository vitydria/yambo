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
      <div className="mg-token-cont">
        <p className="text mg-title mg-t-m">Your Tokens</p>
        <Token />
      </div>
      <div className="mg-cont">
        <p className="text mg-title">Explore Other Games</p>

        <Game />
        <Game />
        <Game />
        <p className="text mg-foo">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            See More...
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MoreGames;
