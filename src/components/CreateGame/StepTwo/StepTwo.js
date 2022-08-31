import { useState } from "react";
//hooks
import useImages from "../../../hooks/useImages";
import useThumbnail from "../../../hooks/useThumbnail";
//utils
import handleOpenWidget from "../../../utils/cloudinary";
import { baseUrl } from "../../../utils/url";
//styles
import "./stepTwo.scss";

const StepTwo = ({ nextStep, handleForm }) => {
  const { images, handleImages, updateImages } = useImages();
  const { thumbnail, handleThumbnails, updateThumbnails } = useThumbnail();
  const [buttonClicked, setButtonClicked] = useState(false);

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
            handleOpenWidget(
              images.length,
              handleImages,
              handleThumbnails,
              4 - images.length
            );
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
          <p className="text">
            You have to upload {4 - images.length} more images
          </p>
        )}
        {thumbnail && (
          <div className="thumbnail-container">
            {thumbnail.map((thumb, index) => {
              return (
                <img
                  key={index}
                  src={`${baseUrl}/${thumb}`}
                  alt={`#${index} thumbnail`}
                  onClick={() => {
                    handleOpenWidget(
                      images.length,
                      updateImages,
                      updateThumbnails,
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
