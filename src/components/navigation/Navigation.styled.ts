import styled from "styled-components";

export const Container = styled.nav<{ isMenuOpen: boolean }>`
  background-color: ${({ theme }) => theme.backgroundPrimary300};
  display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
  flex-direction: column;
  height: 100vh;
  left: 0;
  padding-top: 110px;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: -1;

  @media screen and (min-width: ${({ theme }) => theme.breakpointWidth}) {
    display: flex;
    flex-direction: row;
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
  @keyframes slideUp {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(0);
    }
  }

  align-items: center;
  animation-duration: 0.2s;
  animation-name: slideUp;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  list-style-type: none;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpointWidth}) {
    @keyframes slideLeft {
      0% {
        transform: translateX(10vw);
      }
      100% {
        transform: translateX(0);
      }
    }

    align-items: flex-start;
    animation-duration: 0.2s;
    animation-name: slideLeft;
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
  font-size: 24px;
  padding: 5px;
  text-decoration: none;

  :hover {
    background-color: ${({ theme }) => theme.backgroundPrimary500};
  }

  :visited {
    text-decoration: underline;
  }
`;
