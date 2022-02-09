import * as Styled from './Header.styled.js'

import { useState } from 'react'

import { Navigation } from "../navigation";
import { Logo } from "../logo";
import { MenuButton } from '../menu-button';
import { Profile } from '../profile';

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <Styled.HeaderBar>
            <Logo />
            <Navigation menuIsOpen={menuIsOpen} />
            <Profile />
            <MenuButton menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
        </Styled.HeaderBar>
        );
}
export default Header;
