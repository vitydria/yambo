//react-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//components
import FormContainer from "../../Form/FormContainer/FormContainer";
//style
import "./stepThree.scss";

const prizeSchema = yup
  .object({
    firstPrize: yup
      .string()
      .required("You need to set the 1st prize")
      .matches(/^\d{1,2}$/, "Only máx two digits number"),
    secondPrize: yup
      .string()
      .required("You need to set the 2nd prize")
      .matches(/^\d{1,2}$/, "Only máx two digits number"),
    thirdPrize: yup
      .string()
      .required("You need to set the 3rd prize")
      .matches(/^\d{1,2}$/, "Only máx two digits number"),
    fourthPrize: yup
      .string()
      .required("You need to set the 4th prize")
      .matches(/^\d{1,2}$/, "Only máx two digits number"),
  })
  .required();

const StepThree = ({ nextStep, handleForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(prizeSchema),
  });

  const onSubmit = (data) => {
    handleForm(data);
    nextStep();
  };
  return (
    <div className="prize-container">
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text title">Choose your prizes</h1>
        <p className="text">1st Prize</p>
        <p className="text">
          $
          <input
            className="prize-input"
            {...register("firstPrize")}
            type="text"
          />{" "}
          Amazon gift card
        </p>
        {errors?.firstPrize?.message && (
          <p className="input-errors">{errors?.firstPrize?.message}</p>
        )}

        <p className="text">2nd Prize</p>
        <p className="text">
          $
          <input
            className="prize-input"
            {...register("secondPrize")}
            type="text"
          />{" "}
          Amazon gift card
        </p>
        {errors?.secondPrize?.message && (
          <p className="input-errors">{errors?.secondPrize?.message}</p>
        )}

        <p className="text">3rd Prize</p>
        <p className="text">
          $
          <input
            className="prize-input"
            {...register("thirdPrize")}
            type="text"
          />{" "}
          Amazon gift card
        </p>
        {errors?.thirdPrize?.message && (
          <p className="input-errors">{errors?.thirdPrize?.message}</p>
        )}

        <p className="text">4th Prize</p>
        <p className="text">
          <input
            className="prize-input"
            {...register("fourthPrize")}
            type="text"
          />{" "}
          Tokens
        </p>
        {errors?.fourthPrize?.message && (
          <p className="input-errors">{errors?.fourthPrize?.message}</p>
        )}

        <button className="button" type="submit">
          Next
        </button>
      </FormContainer>
    </div>
  );
};

export default StepThree;
