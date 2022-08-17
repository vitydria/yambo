import { useState } from "react";

const useStep = () => {
  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  return { step, nextStep };
};

export default useStep;
