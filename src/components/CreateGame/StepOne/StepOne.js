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

export const StepOne = ({ nextStep }) => {
  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(gameSchema),
  });

  const setGame = (game) => {
    setValue("gameSelected", game);
  };

  const onSubmit = (data) => {
    console.log("data", data);
    if (data.gameSelected) {
      nextStep();
    }
  };

  return (
    <>
      <div className="step-container">
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text title">Choose your game</h1>
          <div className="btn-container">
            <button
              type="submit"
              className="button step-btn"
              onClick={() => {
                setValue("gameSelected", "scratch");
              }}
            >
              Scratch
            </button>
            <button
              type="submit"
              className="button step-btn"
              disabled
              onClick={() => {
                setValue("gameSelected", "smash");
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
