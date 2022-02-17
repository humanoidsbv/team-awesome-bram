import styled from "styled-components";

export const TimeEntries = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TimeEntryHeader = styled.div`
  color: ${({ theme }) => theme.greyShade600};
  display: flex;
  flex-direction: row;
  font-size: 24px;
  font-weight: normal;
  justify-content: space-between;
  padding-bottom: 20px;
  padding-top: 40px;
`;

export const TimeEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
