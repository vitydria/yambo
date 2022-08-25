//styles
import "./formContainer.scss";

const FormContainer = ({ children, onSubmit }) => {
  return (
    <form className="form-container" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default FormContainer;
