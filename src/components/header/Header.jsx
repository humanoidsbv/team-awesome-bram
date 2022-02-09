import * as Styled from './Header.styled.js'

import { useEffect, useState } from 'react'

import { Navigation } from "../navigation";
import { Logo } from "../logo";
import { MenuButton } from '../menu-button';
import { Profile } from '../profile';

const Header = () => {

    const [menuIsOpen, toggleMenuIsOpen] = useState(false);

    const handleMenuToggle = () => {
        toggleMenuIsOpen(!menuIsOpen)
    }

    
    return (
        <Styled.HeaderBar>
            <Logo />
            {/* {(menuIsOpen) && <Navigation />} */}
            <Navigation menuIsOpen={menuIsOpen} />
            <Profile />
            <MenuButton menuIsOpen={menuIsOpen} handleMenuToggle={handleMenuToggle} />
        </Styled.HeaderBar>
        );
}
export default Header

