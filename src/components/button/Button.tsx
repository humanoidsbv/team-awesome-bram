import * as Styled from "./Button.styled";
import PlusIcon from "../../../public/images/plus-icon.svg";

interface ButtonProps {
  label: string;
  icon?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: "primary" | "secondary";
  width?: number;
}

export const Button = ({ onClick, label, icon = false, style = "primary" }: ButtonProps) => {
  return (
    <Styled.Button onClick={onClick}>
      {icon && <PlusIcon />}
      {label}
    </Styled.Button>
  );
};
