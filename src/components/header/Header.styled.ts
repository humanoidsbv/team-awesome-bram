import styled from "styled-components";

interface HeaderBarProps {
  pageOffSet: boolean;
}

export const HeaderBar = styled.div<HeaderBarProps>`
  align-items: center;
  background-color: rgba(79, 136, 239, ${({ pageOffSet }) => (pageOffSet ? 0.9 : 1)});
  display: flex;
  gap: 50px;
  height: 70px;
  justify-content: space-between;
  padding: 0 30px;
  position: fixed;
  width: 100vw;
`;
