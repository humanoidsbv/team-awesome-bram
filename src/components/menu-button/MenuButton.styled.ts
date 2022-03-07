import styled from "styled-components";

import _CrossIcon from "../../../public/images/close.svg";

export const MenuButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakpointDesktop}) {
    display: none;
  }
`;

export const CrossIcon = styled(_CrossIcon)`
  fill: white;
  width: 14px;
`;
