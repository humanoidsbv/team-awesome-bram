import * as Styled from "./Button.styled";

import PlusIcon from "../../../public/images/plus-icon.svg";

interface ButtonProps {
  disabled?: boolean;
  icon?: boolean;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  secondary?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({
  disabled,
  icon = false,
  label,
  onClick,
  secondary = false,
  type = "button",
}: ButtonProps) => {
  return (
    <Styled.Button {...{ disabled, onClick, secondary, type }}>
      {icon && <PlusIcon />}
      {label}
    </Styled.Button>
  );
};
