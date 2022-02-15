import styled, { css } from "styled-components";

export const Button = styled.button<{ style?: "primary" | "secondary" }>`
  align-items: center;
  background-color: ${({ theme }) => theme.greenShade200};
  border-radius: 4px;
  border: none;
  color: white;
  display: flex;
  flex: 0 1 auto;
  font-size: 14px;
  font-weight: 600;
  gap: 15px;
  height: 40px;
  justify-content: center;
  padding: 0 30px;

  :hover {
    background-color: ${({ theme }) => theme.greenShade300};
  }

  :active {
    background-color: ${({ theme }) => theme.greenShade400};
  }

  ${({ style }) =>
    style === "secondary" &&
    css`
      background-color: ${({ theme }) => theme.greyShade200};
      color: ${({ theme }) => theme.greyShade700};

      svg {
        path {
          fill: ${({ theme }) => theme.greyShade700};
        }
      }

      :hover {
        background-color: ${({ theme }) => theme.greyShade300};
      }
      :active {
        background-color: ${({ theme }) => theme.greyShade400};
      }
    `}
`;
