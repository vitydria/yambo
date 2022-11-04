import React from "react";
//components
import { Token } from "../../components/MoreGames/Token/Token";
import { Game } from "../../components/MoreGames/Game/Game";
//seo
import { Helmet } from "react-helmet";
//react-router
import { Link } from "react-router-dom";
//style
import "./moreGames.scss";
import { useOverflow } from "../../hooks/useOverflow";

const MoreGames = () => {
  useOverflow();
  return (
    <div className="more-games">
      <Helmet>
        <meta name="description" content="Take a look to more games to play" />
        <title>More Games</title>
      </Helmet>
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
