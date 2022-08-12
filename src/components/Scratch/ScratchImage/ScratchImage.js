import React from "react";
//styles
import "./scratchImage.scss";

export const ScratchImage = ({ image }) => {
  return <img alt="Scratching..." src={image} className="scratch-image" />;
};
