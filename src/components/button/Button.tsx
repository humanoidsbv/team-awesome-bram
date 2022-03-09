import { MouseEvent } from "react";

import * as Styled from "./Button.styled";

import PlusIcon from "../../../public/images/plus-icon.svg";

interface ButtonProps {
  disabled?: boolean;
  icon?: boolean;
  label: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  secondary?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  disabled,
  icon,
  label,
  onClick,
  secondary,
  type = "button",
}: ButtonProps) => {
  return (
    <Styled.Button {...{ disabled, onClick, secondary, type }}>
      {icon && <PlusIcon aria-hidden="true" />}
      {label}
    </Styled.Button>
  );
};
