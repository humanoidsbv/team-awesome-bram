import { FocusEvent, useState } from "react";

import * as Styled from "./Input.styled";

interface InputProps {
  label: string;
  inputType: string;
}

export const Input = ({ label, inputType }: InputProps) => {
  const [isValid, setIsValid] = useState(true);

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setIsValid(event.target.checkValidity());
  };

  return (
    <>
      <Styled.Label>{label}</Styled.Label>
      <Styled.InputField onBlur={handleBlur} required type={inputType} {...{ isValid }} />
      {!isValid}
    </>
  );
};
