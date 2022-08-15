import React, { useRef } from "react";
//won
import useWon from "../../hooks/useWon";
//components
import { ScratchGame } from "../../components/Scratch/ScratchGame/ScratchGame";
import { ScratchWon } from "../../components/Scratch/ScratchWon/ScratchWon";
//seo
import { Helmet } from "react-helmet";
//images
import image1 from "../../assets/taylor1.jpg";
import image2 from "../../assets/taylor2.jpg";
import image3 from "../../assets/taylor3.jpg";
import image4 from "../../assets/taylor4.svg";
//styles
import "./scratch.scss";
import { randomImage } from "../../utils/scratch";
import { ScratchStart } from "../../components/Scratch/Start/ScratchStart";
import useSmash from "../../hooks/useSmash";

const Scratch = () => {
  const { won, setWon } = useWon();
  const { start, setStart } = useSmash();
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
