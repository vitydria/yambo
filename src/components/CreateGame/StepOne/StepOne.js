//styles
import "./stepOne.scss";

export const StepOne = ({ nextStep }) => {
  return (
    <>
      <div className="step-container">
        <h1 className="text title">Choose your game</h1>
        <div className="btn-container">
          <button className="button" classNameonClick={nextStep}>
            Scratch
          </button>
          <button className="button" onClick={nextStep}>
            Smash
          </button>
        </div>
      </div>
    </>
  );
};
