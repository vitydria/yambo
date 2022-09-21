import React, { useEffect, useState } from "react";
//context
import { useFormContext } from "../../hooks/useFormContext";
//components
import StepOne from "../../components/CreateGame/StepOne/StepOne";
import StepTwo from "../../components/CreateGame/StepTwo/StepTwo";
import StepThree from "../../components/CreateGame/StepThree/StepThree";
import StepFour from "../../components/CreateGame/StepFour/StepFour";
//utils
import { getUrl } from "../../utils/url";

const CreateGame = () => {
  const context = useFormContext();
  const [gameUrl, setGameUrl] = useState("");

  const { step, nextStep, form, handleForm, previousStep } = context;

  useEffect(() => {
    if (step === 3) {
      getUrl(form).then((url) => setGameUrl(url));
    }
  }, [step]);

  return (
    <div className="grid-layout">
      {step === 0 && <StepOne nextStep={nextStep} handleForm={handleForm} />}
      {step === 1 && (
        <StepTwo
          previousStep={previousStep}
          nextStep={nextStep}
          handleForm={handleForm}
        />
      )}
      {step === 2 && (
        <StepThree
          previousStep={previousStep}
          nextStep={nextStep}
          handleForm={handleForm}
        />
      )}
      {step === 3 && <StepFour gameUrl={gameUrl} form={form} />}
    </div>
  );
};

export default CreateGame;
