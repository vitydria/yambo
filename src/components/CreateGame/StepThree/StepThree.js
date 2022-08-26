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
      .number()
      .typeError("The prize must be a number")
      .required("You need to set the 1st prize", "max")
      .max(99, "Only máx 99 tokens"),
    secondPrize: yup
      .number()
      .typeError("The prize must be a number")
      .required("You need to set the 2nd prize")
      .lessThan(yup.ref("firstPrize"), "Prize must be minus than first prize"),
    thirdPrize: yup
      .number()
      .typeError("The prize must be a number")
      .required("You need to set the 3rd prize")
      .lessThan(
        yup.ref("secondPrize"),
        "Prize must be minus than second prize"
      ),
    fourthPrize: yup
      .number()
      .typeError("The prize must be a number")
      .required("You need to set the 4th prize")
      .max(99, "Only máx 99 tokens"),
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
