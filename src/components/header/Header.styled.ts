import styled from "styled-components";

interface HeaderBarProps {
  pageOffset: boolean;
}

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Proxima;
  position: fixed;
`;

export const HeaderBar = styled.div<HeaderBarProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.blueShade300};
  display: flex;
  gap: 50px;
  height: 70px;
  justify-content: space-between;
  opacity: ${({ pageOffset }) => (pageOffset ? 0.98 : 1)};
  padding: 0 30px;
  width: 100vw;
`;
