import styled from "styled-components";

export const TimeEntries = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TimeEntryHeader = styled.div`
  color: ${({ theme }) => theme.greyShade600};
  display: flex;
  flex-direction: row;
  font-weight: normal;
  justify-content: space-between;
  padding: 40px 0 20px 0;

  :first-of-type {
    padding-top: 0;
  }
`;

export const Date = styled.h2`
  font-size: 24px;
`;

export const Duration = styled.h3`
  font-size: 24px;
`;

export const TimeEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
