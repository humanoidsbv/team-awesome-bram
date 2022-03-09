import { useContext, useEffect, useState } from "react";

import { StoreContext } from "../../providers/storeProvider";

import * as Styled from "./Header.styled";

import { Navigation } from "../navigation";
import { Logo } from "../logo";
import { MenuButton } from "../menu-button";
import { Profile } from "../profile";

export const Header = () => {
  const state = useContext(StoreContext);
  const [isMenuOpen, setIsMenuOpen] = state.isMenuOpen;

  const [pageOffset, setPageOffset] = useState(false);

  const userPictureSrc: string = "images/amijs.jpg";

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (): void => setPageOffset(window.scrollY < 50);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <Styled.Header {...{ pageOffset }}>
      <Logo />
      <Navigation />
      <Profile {...{ userPictureSrc }} />
      <MenuButton {...{ toggleMenu }} />
    </Styled.Header>
  );
};
