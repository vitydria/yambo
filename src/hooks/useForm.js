import { useState } from "react";

const useForm = () => {
  const [form, setForm] = useState({});

  const handleForm = (data) => {
    setForm({ ...form, ...data });
  };

  return { form, setForm, handleForm };
};

export default useForm;
