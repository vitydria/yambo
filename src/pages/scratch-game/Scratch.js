import React, { useRef } from "react";
//hooks
import useWon from "../../hooks/useWon";
import useStart from "../../hooks/useStart";
//components
import { ScratchGame } from "../../components/Scratch/ScratchGame/ScratchGame";
import { ScratchWon } from "../../components/Scratch/ScratchWon/ScratchWon";
import { ScratchStart } from "../../components/Scratch/Start/ScratchStart";
//seo
import { Helmet } from "react-helmet";
//images
import image1 from "../../assets/taylor1.jpg";
import image2 from "../../assets/taylor2.jpg";
import image3 from "../../assets/taylor3.jpg";
import image4 from "../../assets/taylor4.svg";
//utils
import { randomImage } from "../../utils/scratch";
//styles
import "./scratch.scss";

const Scratch = () => {
  const { won, setWon } = useWon();
  const { start, setStart } = useStart();
  const images = [image1, image2, image3, image4];
  const messages = ["Ticket for a concert", "Album", "Spotify", "Tokens"];

  const index = useRef(randomImage(won));

  return (
    <div className={`scratch ${won ? "scratch-won" : ""}`}>
      <Helmet>
        <meta name="description" content="Scratch image to win a prize" />
        <title>Scratch game</title>
      </Helmet>
      {!start && <ScratchStart setStart={setStart} />}
      {!won && start && (
        <ScratchGame setWon={setWon} image={images[index.current]} />
      )}
      {won && (
        <ScratchWon
          won={won}
          index={index.current}
          image={images[index.current]}
          message={messages[index.current]}
        />
      )}
    </div>
  );
};

export default Scratch;
