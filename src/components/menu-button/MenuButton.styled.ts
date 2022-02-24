import styled from "styled-components";

export const MenuButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakpointDesktop}) {
    display: none;
  }
`;
