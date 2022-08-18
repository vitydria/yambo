//styles
import "./stepTwo.scss";

export const StepTwo = ({ nextStep }) => {
  return (
    <>
      <div className="upload-container">
        <h1 className="text title">Upload your photos</h1>
        <input className="upload-input" id="upload-files" type="file" />
        <label className="text upload-label" htmlFor="upload-files">
          CHOOSE FILES
        </label>
        <button className="button" onClick={nextStep}>
          Next
        </button>
      </div>
    </>
  );
};
