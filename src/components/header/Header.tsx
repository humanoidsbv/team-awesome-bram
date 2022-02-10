import * as Styled from "./Header.styled";

import { useEffect, useState } from "react";

import { Navigation } from "../navigation";
import { Logo } from "../logo";
import { MenuButton } from "../menu-button";
import { Profile } from "../profile";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTextUnderHeader, setIsTextUnderHeader] = useState(false);

  const userPictureSrc: string = "images/amijs.jpg";

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (): void => {
    window.pageYOffset < 50 ? setIsTextUnderHeader(true) : setIsTextUnderHeader(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <Styled.HeaderBar isTextUnderHeader={isTextUnderHeader}>
      <Logo />
      <Navigation isMenuOpen={isMenuOpen} />
      <Profile userPictureSrc={userPictureSrc} />
      <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </Styled.HeaderBar>
  );
};
