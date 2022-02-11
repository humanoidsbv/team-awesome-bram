import * as Styled from "./Header.styled";

import { useEffect, useState } from "react";

import { Navigation } from "../navigation";
import { Logo } from "../logo";
import { MenuButton } from "../menu-button";
import { Profile } from "../profile";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageOffSet, setPageOffset] = useState(false);

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
    <Styled.HeaderBar pageOffSet={pageOffSet}>
      <Logo />
      <Navigation isMenuOpen={isMenuOpen} />
      <Profile userPictureSrc={userPictureSrc} />
      <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </Styled.HeaderBar>
  );
};
