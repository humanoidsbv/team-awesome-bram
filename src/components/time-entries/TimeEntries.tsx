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

  const dateOptions: {} = {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "2-digit",
  };

  // const timeEntriesDates = Array.from(
  //   timeEntries.reduce(
  //     (dates, timeEntry) =>
  //       dates.add(new Date(timeEntry.startTimestamp).toLocaleDateString("en-EN", dateOptions)),
  //     new Set(),
  //   ),
  // ) as string[];

  // const timeEntriesDatesArray = [...timeEntriesDates].map((timeEntryDate) =>
  //   timeEntries.filter(
  //     (timeEntry) =>
  //       new Date(timeEntry.startTimestamp).toLocaleDateString("en-EN", dateOptions) ==
  //       timeEntryDate,
  //   ),
  // );

  const dateOptionsSort: {} = {
    day: "numeric",
    month: "numeric",
    year: "2-digit",
  };

  timeEntries.sort((a, b) => (new Date(a.startTimestamp) < new Date(b.startTimestamp) ? -1 : 1));

  console.log(timeEntries);

  const renderHeader = () => {};

  return (
    <Styled.TimeEntries>
      {timeEntries.map((timeEntry, index, array) => {
        return (
          <div key={timeEntry.id}>
            {index >= 1 ? (
              new Date(timeEntry.startTimestamp).toLocaleDateString("en-EN", dateOptionsSort) >
                new Date(timeEntries[index - 1].startTimestamp).toLocaleDateString(
                  "en-EN",
                  dateOptionsSort,
                ) && (
                <Styled.TimeEntryHeader>
                  <p>
                    {new Date(timeEntry.startTimestamp).toLocaleDateString("en-EN", dateOptions)}
                  </p>
                  <p>08:00</p>
                </Styled.TimeEntryHeader>
              )
            ) : (
              <Styled.TimeEntryHeader>
                <p>{new Date(timeEntry.startTimestamp).toLocaleDateString("en-EN", dateOptions)}</p>
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
