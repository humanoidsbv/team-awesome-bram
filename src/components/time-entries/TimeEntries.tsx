import { useState } from "react";

import * as Styled from "./TimeEntries.styled";
import { TimeEntryProps } from "../../types/Types";

import importedTimeEntries from "../../fixtures/time-entries.json";

import { TimeEntry } from "../time-entry/TimeEntry";
import { Button } from "../button/Button";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntryProps[]>(importedTimeEntries);

  function handleClick() {
    setTimeEntries([
      ...timeEntries,
      {
        id: 29138,
        client: "Belastingdienst",
        startTimestamp: "2019-09-26T16:00:00.000Z",
        endTimestamp: "2019-09-26T18:00:00.000Z",
      },
    ]);
  }

  return (
    <Styled.TimeEntries>
      <Styled.TimeEntryHeader>
        <p>Friday 29-07 (Today)</p>
        <p>08:00</p>
      </Styled.TimeEntryHeader>
      <Styled.TimeEntryContainer>
        {timeEntries.map((timeEntry) => (
          <TimeEntry {...timeEntry} />
        ))}
      </Styled.TimeEntryContainer>
      <Button label="Add time entry" onClick={handleClick} />
    </Styled.TimeEntries>
  );
};
