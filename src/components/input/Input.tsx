import { ChangeEvent, FocusEvent, useState } from "react";

import * as Styled from "./Input.styled";

interface InputProps {
  label: string;
  minLength?: number;
  name: string;
  onChange?: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  fieldSize?: string;
  type: string;
  value?: string;
}

export const Input = ({
  label,
  minLength,
  name,
  onChange,
  required,
  fieldSize,
  type,
  value,
}: InputProps) => {
  const [isValid, setIsValid] = useState(true);

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setIsValid(event.target.checkValidity());
  };

  return (
    <Styled.InputContainer>
      <Styled.Label htmlFor={name}> {label}</Styled.Label>
      <Styled.Input
        onBlur={handleBlur}
        {...{ isValid, label, minLength, name, onChange, required, fieldSize, type, value }}
        id={name}
      />
    </Styled.InputContainer>
  );
};
