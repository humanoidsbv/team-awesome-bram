import styled from "styled-components";

export const Label = styled.label`
  color: ${({ theme }) => theme.greyShade600};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const InputField = styled.input<{ isValid: boolean }>`
  background-color: ${({ isValid }) => (!isValid ? ({ theme }) => theme.redShade300 : "white")};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.greyShade400};
  box-shadow: none;
  flex: 1 0 auto;
  font-size: 14px;
  height: 40px;
  margin-bottom: 20px;
  padding-left: 15px;
  width: 100%;
`;
