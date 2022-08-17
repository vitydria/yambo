import React from "react";
//hooks
import useStep from "../../hooks/useStep";
import useStart from "../../hooks/useStart";
//components
import { Start } from "../../components/CreateGame/CreateStart/Start";
import { StepOne } from "../../components/CreateGame/StepOne/StepOne";
import { StepTwo } from "../../components/CreateGame/StepTwo/StepTwo";
import { StepThree } from "../../components/CreateGame/StepThree/StepThree";
import { StepFour } from "../../components/CreateGame/StepFour/StepFour";

const CreateGame = () => {
  const { start, setStart } = useStart();
  const { step, nextStep } = useStep();
  return (
    <div>
      {!start && <Start setStart={setStart} />}
      {start && step === 0 && <StepOne nextStep={nextStep} />}
      {start && step === 1 && <StepTwo nextStep={nextStep} />}
      {start && step === 2 && <StepThree nextStep={nextStep} />}
      {start && step === 3 && <StepFour nextStep={nextStep} />}
    </div>
  );
};

export default CreateGame;
