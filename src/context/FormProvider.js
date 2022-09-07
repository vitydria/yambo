import { useState } from "react";
//utils
import { setValue, getValue } from "../utils/localstorage";
// Context
import FormContext from "./FormContext";

const FormProvider = ({ children }) => {
  const [form, setForm] = useState(getValue("form", {}));

  const [step, setStep] = useState(getValue("step", 0));

  const handleForm = (data) => {
    if (form === {}) {
      setValue("form", data);
      setForm(data);
    } else {
      const addData = { ...form, ...data };
      setValue("addData", addData);
      setForm(addData);
    }
  };

  const previousStep = () => {
    const actualStep = getValue("step") - 1;
    setValue("step", actualStep);
    setStep((step) => step - 1);
  };

  const nextStep = () => {
    if (step === 0) {
      setValue("step", 1);
      setStep(1);
    } else {
      const actualStep = getValue("step") + 1;
      setValue("step", actualStep);
      setStep((step) => step + 1);
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
