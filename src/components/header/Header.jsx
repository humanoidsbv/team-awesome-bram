import * as Styled from "./Header.styled.js";

import { useEffect, useState } from "react";

import { Navigation } from "../navigation";
import { Logo } from "../logo";
import { MenuButton } from "../menu-button";
import { Profile } from "../profile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    window.pageYOffset < 50 ? setScrollPosition(true) : setScrollPosition(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(scrollPosition);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Styled.HeaderBar scrollPosition={scrollPosition}>
      <Logo />
      <Navigation menuIsOpen={isMenuOpen} />
      <Profile />
      <MenuButton menuIsOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </Styled.HeaderBar>
  );
};
export default Header;
