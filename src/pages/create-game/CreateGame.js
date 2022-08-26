import React, { useEffect, useState } from "react";
//hooks
import useStep from "../../hooks/useStep";
import useStart from "../../hooks/useStart";
import useForm from "../../hooks/useForm";
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
  const { step, nextStep } = useStep();
  const { form, handleForm } = useForm();
  const [gameUrl, setGameUrl] = useState();
  useEffect(() => {
    if (step === 3) {
      getUrl(form).then((url) => setGameUrl(url));
    }
  }, [step]);

  return (
    <div className="layout">
      <StepThree nextStep={nextStep} handleForm={handleForm} />
      {/* {!start && <CreateStart setStart={setStart} />}
      {start && step === 0 && (
        <StepOne nextStep={nextStep} handleForm={handleForm} />
      )}
      {start && step === 1 && (
        <StepTwo nextStep={nextStep} handleForm={handleForm} />
      )}
      {start && step === 2 && (
        <StepThree nextStep={nextStep} handleForm={handleForm} />
      )}
      {start && step === 3 && (
        <StepFour
          nextStep={nextStep}
          handleForm={handleForm}
          gameUrl={gameUrl}
        />
      )} */}
    </div>
  );
};

export default CreateGame;
