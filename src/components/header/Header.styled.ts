import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontPrimary};
  position: fixed;
`;

export const HeaderBar = styled.div<{ pageOffset: boolean }>`
  align-items: center;
  background-color: ${({ theme }) => theme.blueShade300};
  display: flex;
  gap: 50px;
  height: 70px;
  justify-content: space-between;
  opacity: ${({ pageOffset }) => (pageOffset ? 0.96 : 1)};
  padding: 0 30px;
  width: 100vw;
`;
