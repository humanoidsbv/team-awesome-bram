import * as Styled from "./MenuButton.styled.js";
import CrossIcon from "../../../public/images/close.svg";
import HamburgerIcon from "../../../public/images/hamburger.svg";

export function MenuButton({ isMenuOpen, toggleMenu }) {
  const icon = isMenuOpen ? <CrossIcon /> : <HamburgerIcon />;

  return <Styled.MenuButton onClick={toggleMenu}>{icon}</Styled.MenuButton>;
}
