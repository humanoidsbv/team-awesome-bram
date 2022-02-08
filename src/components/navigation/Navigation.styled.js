import styled from 'styled-components';

export const Container = styled.nav`
    position: absolute;
    background-color: #4F88EF;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    padding-top: 110px;
    z-index: -1;
`;

export const UnorderList = styled.ul`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    list-style-type: none; 
`;

export const ListItem = styled.li`
`;

export const Link = styled.a`
    border-radius: 3px;
    font-family: Proxima Nova;
    font-size: 24px;
    padding: 5px;
    text-decoration: none;   
    color: white;
    :hover {
        background-color: #1166A5;
    }
`;