import styled from "styled-components";

export const MenuButton = styled.button`
  @media screen and (min-width: ${({ theme }) => theme.breakpointWidthDesktop}) {
    display: none;
  }

  background-color: transparent;
  border: 0px;
  cursor: pointer;
`;
