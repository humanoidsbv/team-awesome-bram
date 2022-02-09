import styled from 'styled-components';

export const Container = styled.nav`
    background-color: #4F88EF;
    display: ${props => props.menuIsOpen ? 'flex' : 'none'};
    flex-direction: column;
    height: 100vh;
    left: 0;
    padding-top: 110px;
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: -1;

    @media screen and (min-width: 992px) {
        background-color: rgba(79, 136, 239, 0);
        flex-direction: row;
        display: flex;
        flex: 0 1 70%;
        gap: 20px;
        height: auto;
        justify-content: start;
        justify-self: flex-start;
        padding-top: 0;
        position: relative;
        width: auto;
        z-index: auto;
    }
`;

export const UnorderList = styled.ul`
    position: relative;
    
    @keyframes comeUp {
        0%   {top: 100vh;}
        100% {top: 0vh;}
    }  

    animation-name: comeUp;
    animation-duration: 0.2s;

    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    list-style-type: none;
    
    @media screen and (min-width: 992px) {
        position: relative;

        @keyframes comeSide {
        0%   {left: 10vw;}
        100% {left: 0vw;}
        }  

        animation-name: comeSide;
        animation-duration: 0.2s;
            
        align-items: flex-start;
        flex-direction: row;
        gap: 20px;
        
        a {
            font-size: 14px;
        }
    }
`;

export const Link = styled.a`
    border-radius: 3px;
    color: white;
    font-family: Proxima;
    font-size: 24px;
    padding: 5px;
    text-decoration: none;   

    :hover {
        background-color: #1166A5;
    }

    :visited {
        text-decoration: underline;
    }
`;
