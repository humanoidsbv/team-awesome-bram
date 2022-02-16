import * as Styled from "./TimeEntries.styled";

import { TimeEntry } from "../time-entry/TimeEntry";

export const TimeEntries = () => {
  return (
    <Styled.TimeEntries>
      <Styled.TimeEntryHeader>
        <p>Friday 29-07 (Today)</p>
        <p>08:00</p>
      </Styled.TimeEntryHeader>
      <Styled.TimeEntryContainer>
        <TimeEntry />
        <TimeEntry />
      </Styled.TimeEntryContainer>
      <Styled.TimeEntryHeader>
        <p>Friday 29-07 (Today)</p>
        <p>08:00</p>
      </Styled.TimeEntryHeader>
      <Styled.TimeEntryContainer>
        <TimeEntry />
        <TimeEntry />
        <TimeEntry />
        <TimeEntry />
      </Styled.TimeEntryContainer>
      <Styled.TimeEntryHeader>
        <p>Friday 29-07 (Today)</p>
        <p>08:00</p>
      </Styled.TimeEntryHeader>
      <Styled.TimeEntryContainer>
        <TimeEntry />
        <TimeEntry />
        <TimeEntry />
        <TimeEntry />
      </Styled.TimeEntryContainer>
    </Styled.TimeEntries>
  );
};
