import * as Styled from './MenuButton.styled.js'
import CrossIcon from "../../../images/close.svg"
import HamburgerIcon from "../../../images/hamburger.svg"

export function MenuButton({menuIsOpen, handleMenuToggle}) {
    const icon = menuIsOpen ? <CrossIcon /> : <HamburgerIcon />;
    return (
        <Styled.MenuButton onClick={handleMenuToggle}>{icon}</Styled.MenuButton>
    )
}

