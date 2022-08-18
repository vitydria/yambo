import React from "react";

const FormContainer = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default FormContainer;
