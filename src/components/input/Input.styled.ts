import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.greyShade600};
  font-size: 14px;
  font-weight: 600;
`;

export const Input = styled.input<{ isValid: boolean; fieldSize?: string }>`
  background-color: ${({ isValid }) => (!isValid ? ({ theme }) => theme.redShade300 : "white")};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.greyShade400};
  box-shadow: none;
  flex: 1 0 auto;
  font-size: 14px;
  height: ${({ fieldSize }) => (fieldSize == "large" ? "70px" : "40px")};
  padding-left: 15px;
  width: 100%;
`;
