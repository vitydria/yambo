//hooks
import useWon from "../../hooks/useWon";
import useStart from "../../hooks/useStart";
//components
import { ScratchGame } from "../../components/Scratch/ScratchGame/ScratchGame";
import { ScratchWon } from "../../components/Scratch/ScratchWon/ScratchWon";
import { ScratchStart } from "../../components/Scratch/Start/ScratchStart";
//seo
import { Helmet } from "react-helmet";
//styles
import "./scratch.scss";

const Scratch = () => {
  const { won, setWon } = useWon();
  const { start, setStart } = useStart();

  return (
    <div className={`scratch ${won ? "scratch-won" : ""}`}>
      <Helmet>
        <meta name="description" content="Scratch image to win a prize" />
        <title>Scratch game</title>
      </Helmet>
      {!start && <ScratchStart setStart={setStart} />}
      {!won && start && <ScratchGame setWon={setWon} />}
      {won && <ScratchWon won={won} />}
    </div>
  );
};

export default Scratch;
