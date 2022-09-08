import { useState, useEffect } from "react";
//utils
import { setValue, getValue } from "../utils/sessionstorage";
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
      setValue("form", addData);
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

  const resetProvider = () => {
    window.sessionStorage.clear();
    setForm({});
    setStep(0);
  };

  useEffect(() => {
    if (step === 1 && !form.gameSelected) {
      resetProvider();
    }
    if (step === 2 && (!form.gameSelected || form.images.length < 4)) {
      resetProvider();
    }
    if (
      step === 3 &&
      (!form.gameSelected ||
        form.images.length < 4 ||
        Object.keys(form.prizes).length < 4)
    ) {
      resetProvider();
    }
  }, []);

  const context = {
    form,
    handleForm,
    step,
    previousStep,
    nextStep,
    resetProvider,
    setStep,
  };

  return (
    <FormContext.Provider value={context}>{children}</FormContext.Provider>
  );
};

export default FormProvider;
