import React from "react";
//components
import { ScratchImage } from "../ScratchImage/ScratchImage";
//router-dom
import { Link } from "react-router-dom";
//styles
import "./scratchWon.scss";

export const ScratchWon = ({ win }) => {
  return (
    <>
      <p className="text title margin-title">You Win!</p>
      <ScratchImage win={win} />
      <p className="text margin-token">Token #298</p>
      <button className="button">
        <Link
          to="/more-games"
          style={{ textDecoration: "none", color: "white" }}
        >
          CONTINUE
        </Link>
      </button>
    </>
  );
};
