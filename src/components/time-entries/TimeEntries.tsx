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

  const timestampToDateString = (timestamp: string, sortingOptions: {}) => {
    return new Date(timestamp).toLocaleDateString("en-EN", sortingOptions);
  };

  timeEntries.sort((a, b) => (new Date(a.startTimestamp) < new Date(b.startTimestamp) ? -1 : 1));

  return (
    <Styled.TimeEntries>
      {timeEntries.map((timeEntry, i, entries) => {
        const currentDate: string = timestampToDateString(
          timeEntry.startTimestamp,
          dateOptionsSort,
        );

        const previousDate: string =
          i > 0
            ? timestampToDateString(entries[i - 1].startTimestamp, dateOptionsSort)
            : timestampToDateString("0", dateOptionsSort);

        const isDateDifferent: boolean = previousDate < currentDate;

        return (
          <div key={timeEntry.id}>
            {isDateDifferent && (
              <Styled.TimeEntryHeader>
                <p>{timestampToDateString(timeEntry.startTimestamp, dateOptionsDisplay)}</p>
                <p>08:00</p>
              </Styled.TimeEntryHeader>
            )}
            <Styled.TimeEntryContainer>
              <TimeEntry {...timeEntry} key={timeEntry.id} />
            </Styled.TimeEntryContainer>
          </div>
        );
      })}
      <Button label="Add time entry" onClick={handleClick} />
    </Styled.TimeEntries>
  );
};
