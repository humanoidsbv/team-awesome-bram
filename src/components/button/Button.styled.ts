import styled, { css } from "styled-components";

interface ButtonProps {
  style?: "primary" | "secondary";
}

export const Button = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundSecondary300};
  border-radius: 4px;
  border: none;
  color: white;
  display: flex;
  font-size: 14px;
  gap: 15px;
  height: 40px;
  justify-content: center;
  flex: 0 1 auto;
  padding: 0 30px;

  :active {
    background-color: blue;
  }
  ${({ style }) =>
    style === "secondary" &&
    css`
      background-color: ${({ theme }) => theme.greyShade200};
      color: ${({ theme }) => theme.greyShade700};

      :active {
        background-color: ${({ theme }) => theme.greyShade500};
      }
    `}
`;
