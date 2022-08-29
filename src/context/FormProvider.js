import { useState } from "react";
// Context
import FormContext from "./FormContext";

const FormProvider = ({ children }) => {
  const [form, setForm] = useState(
    window.localStorage.getItem("form")
      ? JSON.parse(window.localStorage.getItem("form"))
      : {}
  );
  const [step, setStep] = useState(
    window.localStorage.getItem("step")
      ? JSON.parse(window.localStorage.getItem("step"))
      : 0
  );

  console.log(window.localStorage.getItem("step"));

  const handleForm = (data) => {
    console.log("data on provider: ", data);
    if (form === {}) {
      window.localStorage.setItem("form", JSON.stringify(data));
      setForm(JSON.parse(window.localStorage.getItem("form")));
    } else {
      const addData = { ...form, ...data };
      window.localStorage.setItem("form", JSON.stringify(addData));
      setForm(JSON.parse(window.localStorage.getItem("form")));
    }
  };

  const nextStep = () => {
    if (step === 0) {
      window.localStorage.setItem("step", JSON.stringify(1));
      setStep(JSON.parse(window.localStorage.getItem("step")));
    } else {
      const actualStep = JSON.parse(window.localStorage.getItem("step")) + 1;
      window.localStorage.setItem("step", JSON.stringify(actualStep));
      setStep(JSON.parse(window.localStorage.getItem("step")));
    }
  };

  const context = {
    form,
    handleForm,
    step,
    nextStep,
  };

  return (
    <FormContext.Provider value={context}>{children}</FormContext.Provider>
  );
};

export default FormProvider;
