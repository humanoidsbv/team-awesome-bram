import * as Styled from "./MenuButton.styled";
import CrossIcon from "../../../public/images/close.svg";
import HamburgerIcon from "../../../public/images/hamburger.svg";

interface MenuButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const MenuButton = ({ isMenuOpen, toggleMenu }: MenuButtonProps) => {
  const icon = isMenuOpen ? <CrossIcon fill="#fff" width="14px" /> : <HamburgerIcon />;

  return <Styled.MenuButton onClick={toggleMenu}>{icon}</Styled.MenuButton>;
};
