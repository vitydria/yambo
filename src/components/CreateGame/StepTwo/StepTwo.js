import { useState } from "react";
//hooks
import useImages from "../../../hooks/useImages";
//utils
import handleOpenWidget from "../../../utils/cloudinary";
//styles
import "./stepTwo.scss";

const StepTwo = ({ nextStep, handleForm }) => {
  const { images, handleImages } = useImages();
  const [buttonClicked, setButtonClicked] = useState(false);
  console.log(images);

  const submitImages = () => {
    if (images.length === 4) {
      setButtonClicked(false);
      handleForm({ images: images });
      nextStep();
    } else {
      setButtonClicked(true);
    }
  };
  return (
    <>
      <div className="upload-container">
        <h1 className="text title">Upload your photos</h1>
        <button
          className="text upload-label"
          onClick={() => {
            handleOpenWidget(images.length, handleImages, 4 - images.length);
          }}
        >
          Choose files
        </button>
        {images?.length > 3 && (
          <p className="text">
            You have already loaded four images, click next
          </p>
        )}
        {buttonClicked && images.length < 4 && (
          <p className="text">You need to upload {4 - images.length} images</p>
        )}

        <button
          className="button"
          style={{ marginTop: "50px" }}
          onClick={submitImages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default StepTwo;
