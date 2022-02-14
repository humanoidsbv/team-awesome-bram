import * as Styled from "./Header.styled";

import { useEffect, useState } from "react";

import { Navigation } from "../navigation";
import { Logo } from "../logo";
import { MenuButton } from "../menu-button";
import { Profile } from "../profile";
import { SubHeader } from "../subheader";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageOffset, setPageOffset] = useState(false);

  const userPictureSrc: string = "images/amijs.jpg";

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (): void => {
    window.pageYOffset < 50 ? setPageOffset(false) : setPageOffset(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <Styled.Header>
      <Styled.HeaderBar {...{ pageOffset }}>
        <Logo />
        <Navigation {...{ isMenuOpen }} />
        <Profile {...{ userPictureSrc }} />
        <MenuButton {...{ isMenuOpen }} {...{ toggleMenu }} />
      </Styled.HeaderBar>
      <SubHeader {...{ isMenuOpen }} />
    </Styled.Header>
  );
};
