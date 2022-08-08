import React from "react";
//styles
import "./scratchImage.scss";

export const ScratchImage = ({ win }) => {
  return <div className={`scratch-image ${win ? "image-won" : ""}`}></div>;
};
