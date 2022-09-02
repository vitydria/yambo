//hooks
import useImages from "../../../hooks/useImages";
//utils
import handleOpenWidget from "../../../utils/cloudinary";
import { baseUrl } from "../../../utils/url";
//styles
import "./stepTwo.scss";

const StepTwo = ({ previousStep, nextStep, handleForm }) => {
  const { images, handleImages, updateImages, clearImages } = useImages();

  const submitImages = () => {
    if (images?.length === 4) {
      handleForm({ images: images });
      nextStep();
    }
  };

  return (
    <>
      <div className="upload-container">
        <h1 className="text title">Upload your photos</h1>
        <button
          className="text upload-label"
          onClick={() => {
            handleOpenWidget(images?.length, handleImages, 4 - images.length);
          }}
        >
          Choose files
        </button>

        <button
          className={`small-button${images.length < 1 ? "hide" : ""}`}
          onClick={clearImages}
        >
          Clear
        </button>

        <div
          className={`thumbnail-container${images.length < 1 ? "hide" : ""}`}
        >
          {images?.map((img, index) => {
            return (
              <img
                key={index}
                src={`${baseUrl}/${img}`}
                alt={`#${index} thumbnail`}
                className="thumbnail"
                onClick={() => {
                  handleOpenWidget(images.length, updateImages, 1, true, index);
                }}
              />
            );
          })}
        </div>

        <p className="text-warning">{images.length}/4 images uploaded</p>

        <div className="btn-container">
          <button className="button" onClick={previousStep}>
            Back
          </button>
          <button
            className="button"
            onClick={submitImages}
            disabled={images.length < 4}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
