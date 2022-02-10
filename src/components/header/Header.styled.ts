import styled from "styled-components";

interface HeaderBarProps {
  isTextUnderHeader: boolean;
}

export const HeaderBar = styled.div<HeaderBarProps>`
  position: fixed;
  width: 100vw;
  background-color: ${({ isTextUnderHeader }) =>
    !isTextUnderHeader ? "rgba(79, 136, 239, 0.9)" : "rgb(79, 136, 239)"};
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 0 30px;
  align-items: center;
  gap: 50px;
`;
