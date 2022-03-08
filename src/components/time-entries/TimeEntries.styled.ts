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

export const SelectorBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const Select = styled.select`
  border: 1px solid ${({ theme }) => theme.greyShade400};
  border-radius: 4px;
  height: 30px;
  padding-left: 5px;
`;
