//react-hook-form
import { useForm } from "react-hook-form";
//yup
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//components
import FormContainer from "../../Form/FormContainer/FormContainer";
//styles
import "./stepOne.scss";

const gameSchema = yup
  .object({
    gameSelected: yup.string().required(),
  })
  .required();

const StepOne = ({ nextStep, handleForm }) => {
  const { setValue, handleSubmit } = useForm({
    resolver: yupResolver(gameSchema),
  });

  const onSubmit = (data) => {
    if (data.gameSelected) {
      handleForm(data);
      nextStep();
    }
  };
  return (
    <>
      <div className="step-container">
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text title">Select game</h1>
          <div className="btn-container-one">
            <button
              type="submit"
              className="button step-btn"
              onClick={() => {
                setValue("gameSelected", "1");
              }}
            >
              Scratch
            </button>
            <button
              type="submit"
              className="button step-btn"
              disabled
              onClick={() => {
                setValue("gameSelected", "2");
              }}
            >
              Smash
            </button>
          </div>
        </FormContainer>
      </div>
    </>
  );
};

export default StepOne;
