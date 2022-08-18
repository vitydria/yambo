//styles
import "./stepOne.scss";

export const StepOne = ({ nextStep }) => {
  return (
    <>
      <div className="step-container">
        <h1 className="text title">Choose your game</h1>
        <div className="btn-container">
          <button className="button step-btn" onClick={nextStep}>
            Scratch
          </button>
          <button className="button step-btn" disabled onClick={nextStep}>
            Smash
          </button>
        </div>
      </div>
    </>
  );
};
