import styled from "styled-components";

export const TeamMembers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SelectorBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const Select = styled.select`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.greyShade400};
  height: 30px;
  padding-left: 5px;
`;
