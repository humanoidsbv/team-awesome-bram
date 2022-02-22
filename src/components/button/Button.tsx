import * as Styled from "./Button.styled";

import PlusIcon from "../../../public/images/plus-icon.svg";

interface ButtonProps {
  disabled?: boolean;
  icon?: boolean;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  secondary?: boolean;
}

export const Button = ({
  disabled,
  icon = false,
  label,
  onClick,
  secondary = false,
}: ButtonProps) => {
  return (
    <Styled.Button {...{ disabled, onClick, secondary }}>
      {icon && <PlusIcon />}
      {label}
    </Styled.Button>
  );
};
