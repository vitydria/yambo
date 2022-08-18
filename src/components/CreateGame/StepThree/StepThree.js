//style
import "./stepThree.scss";

export const StepThree = ({ nextStep }) => {
  return (
    <div className="prize-container">
      <h1 className="text title">Choose your prizes</h1>
      <p className="text">1st Prize</p>
      <p className="text">
        $<input className="prize-input" type="text" /> Amazon gift card
      </p>
      <p className="text">2nd Prize</p>
      <p className="text">
        $<input className="prize-input" type="text" /> Amazon gift card
      </p>
      <p className="text">3rd Prize</p>
      <p className="text">
        $<input className="prize-input" type="text" /> Amazon gift card
      </p>
      <p className="text">4th Prize</p>
      <p className="text">
        $<input className="prize-input" type="text" /> Tokens
      </p>
      <button className="button" onClick={nextStep}>
        Next
      </button>
    </div>
  );
};
