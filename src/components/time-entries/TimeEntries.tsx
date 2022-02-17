import React, { useState } from "react";

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
        startTimestamp: "2022-09-26T05:00:00.000Z",
        endTimestamp: "2022-09-26T07:00:00.000Z",
      },
    ]);
  }

  const dateOptionsDisplay: {} = {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "2-digit",
  };

  const dateOptionsSort: {} = {
    day: "numeric",
    month: "numeric",
    year: "2-digit",
  };

  const timestampToDateString = (timestamp: string, options: {}) => {
    return new Date(timestamp).toLocaleDateString("en-EN", options);
  };

  timeEntries.sort((a, b) => (new Date(a.startTimestamp) < new Date(b.startTimestamp) ? -1 : 1));

  return (
    <Styled.TimeEntries>
      {timeEntries.map((timeEntry, i, entries) => {
        const currentDate = timestampToDateString(timeEntry.startTimestamp, dateOptionsSort);

        const isDateDifferent =
          i > 0
            ? timestampToDateString(entries[i - 1].startTimestamp, dateOptionsSort) < currentDate
            : true;

        return (
          <React.Fragment key={Math.random() * 1000}>
            {isDateDifferent && (
              <Styled.TimeEntryHeader>
                <p>{timestampToDateString(timeEntry.startTimestamp, dateOptionsDisplay)}</p>
                <p>-</p>
              </Styled.TimeEntryHeader>
            )}
            <Styled.TimeEntryContainer>
              <TimeEntry {...timeEntry} />
            </Styled.TimeEntryContainer>
          </React.Fragment>
        );
      })}
      <Button label="Add time entry" onClick={handleClick} />
    </Styled.TimeEntries>
  );
};
