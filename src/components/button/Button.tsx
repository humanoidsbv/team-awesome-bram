import * as Styled from "./Button.styled";

import PlusIcon from "../../../public/images/plus-icon.svg";

interface ButtonProps {
  icon?: boolean;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  secondary?: boolean;
}

export const Button = ({ onClick, label, icon = false, secondary = false }: ButtonProps) => {
  return (
    <Styled.Button {...{ onClick, secondary }}>
      {icon && <PlusIcon />}
      {label}
    </Styled.Button>
  );
};
