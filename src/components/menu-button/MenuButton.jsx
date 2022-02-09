import * as Styled from './MenuButton.styled.js'
import CrossIcon from "../../../public/images/close.svg"
import HamburgerIcon from "../../../public/images/hamburger.svg"

export function MenuButton({menuIsOpen, handleMenuToggle}) {
    const icon = menuIsOpen ? <CrossIcon /> : <HamburgerIcon />;

    return (
        <Styled.MenuButton onClick={handleMenuToggle}>{icon}</Styled.MenuButton>
    )
}

