import { FocusEvent, useState } from "react";

import * as Styled from "./Input.styled";

interface InputProps {
  label: string;
  minLength?: number;
  name: string;
  onChange?: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type: string;
  value?: string;
}

export const Input = ({ label, minLength, name, onChange, required, type, value }: InputProps) => {
  const [isValid, setIsValid] = useState(true);

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setIsValid(event.target.checkValidity());
  };

  return (
    <>
      <Styled.Label>{label}</Styled.Label>
      <Styled.InputField
        onBlur={handleBlur}
        {...{ isValid, label, minLength, name, onChange, required, type, value }}
      />
    </>
  );
};
