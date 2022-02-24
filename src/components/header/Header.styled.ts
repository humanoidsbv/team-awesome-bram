import styled from "styled-components";

export const Header = styled.div<{ pageOffset: boolean }>`
  align-items: center;
  background-color: ${({ theme }) => theme.blueShade300};
  display: flex;
  font-family: ${({ theme }) => theme.fontPrimary};
  gap: 50px;
  height: ${({ theme }) => theme.headerHeight};
  justify-content: space-between;
  opacity: 1;
  padding: 0 30px;
  position: fixed;
  width: 100vw;
  z-index: 20;

  @media screen and (min-width: ${({ theme }) => theme.breakpointDesktop}) {
    opacity: ${({ pageOffset }) => (pageOffset ? 0.96 : 1)};
  }
`;
