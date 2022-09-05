import { useState } from "react";
// Context
import FormContext from "./FormContext";

const FormProvider = ({ children }) => {
  const [form, setForm] = useState(
    window.sessionStorage.getItem("form")
      ? JSON.parse(window.sessionStorage.getItem("form"))
      : {}
  );
  const [step, setStep] = useState(
    window.sessionStorage.getItem("step")
      ? JSON.parse(window.sessionStorage.getItem("step"))
      : 0
  );

  const handleForm = (data) => {
    if (form === {}) {
      window.sessionStorage.setItem("form", JSON.stringify(data));
      setForm(JSON.parse(window.sessionStorage.getItem("form")));
    } else {
      const addData = { ...form, ...data };
      window.sessionStorage.setItem("form", JSON.stringify(addData));
      setForm(JSON.parse(window.sessionStorage.getItem("form")));
    }
  };

  const previousStep = () => {
    const actualStep = JSON.parse(window.sessionStorage.getItem("step")) - 1;
    window.sessionStorage.setItem("step", JSON.stringify(actualStep));
    setStep(JSON.parse(window.sessionStorage.getItem("step")));
  };

  const nextStep = () => {
    if (step === 0) {
      window.sessionStorage.setItem("step", JSON.stringify(1));
      setStep(JSON.parse(window.sessionStorage.getItem("step")));
    } else {
      const actualStep = JSON.parse(window.sessionStorage.getItem("step")) + 1;
      window.sessionStorage.setItem("step", JSON.stringify(actualStep));
      setStep(JSON.parse(window.sessionStorage.getItem("step")));
    }
  };

  const context = {
    form,
    handleForm,
    step,
    previousStep,
    nextStep,
  };

  return (
    <FormContext.Provider value={context}>{children}</FormContext.Provider>
  );
};

export default FormProvider;
