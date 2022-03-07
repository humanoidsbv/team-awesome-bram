import styled from "styled-components";

import ImportedCrossIcon from "../../../public/images/close.svg";

export const MenuButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakpointDesktop}) {
    display: none;
  }
`;

export const CrossIcon = styled(ImportedCrossIcon)`
  fill: white;
  width: 14px;
`;
