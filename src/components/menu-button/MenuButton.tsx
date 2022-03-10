import { useContext } from "react";

import { StoreContext } from "../../providers/storeProvider";

import * as Styled from "./MenuButton.styled";

import HamburgerIcon from "../../../public/images/hamburger.svg";

interface MenuButtonProps {
  toggleMenu: () => void;
}

export const MenuButton = ({ toggleMenu }: MenuButtonProps) => {
  const state = useContext(StoreContext);
  const [isMenuOpen] = state.isMenuOpen;

  const icon = isMenuOpen ? (
    <Styled.CrossIcon data-testid="icon" aria-label="close" />
  ) : (
    <HamburgerIcon data-testid="icon" aria-label="menu" />
  );

  return <Styled.MenuButton onClick={toggleMenu}>{icon}</Styled.MenuButton>;
};
