import { useState } from "react";
//hooks
import useImages from "../../../hooks/useImages";
//utils
import handleOpenWidget from "../../../utils/cloudinary";
import { baseUrl } from "../../../utils/url";
//styles
import "./stepTwo.scss";

const StepTwo = ({ nextStep, handleForm }) => {
  const { images, handleImages, updateImages, clearImages } = useImages();

  const [buttonClicked, setButtonClicked] = useState(false);

  const submitImages = () => {
    if (images?.length === 4) {
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
            handleOpenWidget(images?.length, handleImages, 4 - images.length);
          }}
        >
          Choose files
        </button>
        {images && (
          <div className="thumbnail-container">
            {images?.map((img, index) => {
              return (
                <img
                  key={index}
                  src={`${baseUrl}/${img}`}
                  alt={`#${index} thumbnail`}
                  className="thumbnail"
                  onClick={() => {
                    handleOpenWidget(
                      images.length,
                      updateImages,
                      1,
                      true,
                      index
                    );
                  }}
                />
              );
            })}
          </div>
        )}

        <p className="text-warning">{images.length}/4 images uploaded</p>

        <div className="btn-container">
          <button className="button" onClick={clearImages}>
            Clear
          </button>
          <button className="button" onClick={submitImages}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
