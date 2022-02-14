import * as Styled from "./Button.styled";

import PlusIcon from "../../../public/images/plus-icon.svg";

interface ButtonProps {
  icon?: boolean;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: "primary" | "secondary";
}

export const Button = ({ onClick, label, icon = false, style = "primary" }: ButtonProps) => {
  return (
    <Styled.Button {...{ style, onClick }}>
      {icon && <PlusIcon />}
      {label}
    </Styled.Button>
  );
};
