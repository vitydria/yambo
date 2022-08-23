//components
import FormContainer from "../../Form/FormContainer/FormContainer";
//react-hook-form
import { useForm } from "react-hook-form";
//api
import uploadImage from "../../../api/image";
//yup
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//styles
import "./stepTwo.scss";

const schema = yup
  .object({
    images: yup
      .mixed()
      .test("files", "You have to upload four images", (value) => {
        return !(value && value?.length !== 4);
      })
      .test("fileSize", "Some image size is too large", (value) => {
        if (value && value?.length > 0) {
          for (let i = 0; i < 4; i++) {
            if (value[i] && value[i] > 2000000) {
              return false;
            }
          }
          return true;
        }
      })
      .test(
        "fileType",
        "Unsupported format, only format supports are png, jpg, jpeg",
        (value) => {
          if (value && value.length > 0) {
            for (let i = 0; i < 4; i++) {
              if (
                value[i]?.type !== "image/png" &&
                value[i]?.type !== "image/jpg" &&
                value[i]?.type !== "image/jpeg"
              ) {
                return false;
              }
            }
            return true;
          }
        }
      ),
  })
  .required();

const StepTwo = ({ nextStep, handleForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const imagesArray = [];

    for (let i = 0; i < data.images.length; i++) {
      const response = await uploadImage(data.images[i]);
      imagesArray.push(response.data.link.slice(20));
    }

    handleForm({ images: imagesArray });
    nextStep();
  };
  return (
    <>
      <div className="upload-container">
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text title">Upload your photos</h1>
          <input
            className="upload-input"
            {...register("images")}
            multiple="multiple"
            id="upload-files"
            type="file"
          />
          <label className="text upload-label" htmlFor="upload-files">
            CHOOSE FILES
          </label>
          {errors?.images?.message && (
            <p className="input-error">{errors?.images?.message}</p>
          )}
          <button
            type="submit"
            className="button"
            style={{ marginTop: "50px" }}
          >
            Next
          </button>
        </FormContainer>
      </div>
    </>
  );
};

export default StepTwo;
