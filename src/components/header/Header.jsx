import * as Styled from './Header.styled.js'

import { useEffect, useState } from 'react'

import { Navigation } from "../navigation";
import { Logo } from "../logo";
import { MenuButton } from '../menu-button';


const Header = () => {

    const [menuIsOpen, toggleMenuIsOpen] = useState(false);

    console.log(menuIsOpen)

    const handleMenuToggle = () => {
        toggleMenuIsOpen(!menuIsOpen)
    }
    
    return (
        <Styled.HeaderBar>
            <Logo />
            {menuIsOpen && <Navigation />}
            <MenuButton menuIsOpen={menuIsOpen} handleMenuToggle={handleMenuToggle} />
        </Styled.HeaderBar>
        );
}
export default Header

