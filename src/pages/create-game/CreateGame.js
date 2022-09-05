import React, { useEffect, useState } from "react";
//hooks
import useStart from "../../hooks/useStart";
//context
import { useFormContext } from "../../hooks/useFormContext";
//components
import CreateStart from "../../components/CreateGame/CreateStart/CreateStart";
import StepOne from "../../components/CreateGame/StepOne/StepOne";
import StepTwo from "../../components/CreateGame/StepTwo/StepTwo";
import StepThree from "../../components/CreateGame/StepThree/StepThree";
import StepFour from "../../components/CreateGame/StepFour/StepFour";
//utils
import { getUrl } from "../../utils/url";

const CreateGame = () => {
  const { start, setStart } = useStart();
  const context = useFormContext();
  const [gameUrl, setGameUrl] = useState();

  const { step, nextStep, form, handleForm, previousStep } = context;

  useEffect(() => {
    if (step === 3) {
      getUrl(form).then((url) => setGameUrl(url));
    }
  }, [step]);

  return (
    <div className="layout">
      {!start && <CreateStart setStart={setStart} />}
      {start && step === 0 && (
        <StepOne nextStep={nextStep} handleForm={handleForm} />
      )}
      {start && step === 1 && (
        <StepTwo
          previousStep={previousStep}
          nextStep={nextStep}
          handleForm={handleForm}
        />
      )}
      {start && step === 2 && (
        <StepThree
          previousStep={previousStep}
          nextStep={nextStep}
          handleForm={handleForm}
        />
      )}
      {start && step === 3 && (
        <StepFour
          nextStep={nextStep}
          handleForm={handleForm}
          gameUrl={gameUrl}
        />
      )}
    </div>
  );
};

export default CreateGame;
