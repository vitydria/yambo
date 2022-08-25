//hooks
import useImages from "../../../hooks/useImages";
//utils
import handleOpenWidget from "../../../utils/cloudinary";
//styles
import "./stepTwo.scss";

const StepTwo = ({ nextStep, handleForm }) => {
  const { images, setImages } = useImages();

  const submitImages = () => {
    handleForm({ images: images });
    nextStep();
  };
  return (
    <>
      <div className="upload-container">
        <h1 className="text title">Upload your photos</h1>
        <button
          className="text upload-label"
          onClick={() => {
            handleOpenWidget(images.length, setImages);
          }}
        >
          Choose files
        </button>
        {images?.length > 3 && (
          <p className="text">
            You have already loaded four images, click next
          </p>
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
