import React, { useState, useEffect } from "react";

import * as Styled from "./TimeEntries.styled";
import { TimeEntryProps } from "../../types/Types";

import { retrieveTimeEntries } from "../../services/time-entry-api/RetrieveTimeEntries";
import { timestampToDateString } from "../../services/time-entry-api/timeStampToDateString";
import { NotFoundError } from "../../errors/not-found-error/NotFoundError";

import { TimeEntry } from "../time-entry/TimeEntry";
import { Button } from "../button/Button";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntryProps[]>([]);

  const endpoint = "http://localhost:3004/time-entries";

  async function fetchTimeEntries() {
    if ((await retrieveTimeEntries(endpoint)) instanceof NotFoundError) {
      console.log("404: Not found!");
      return;
    }
    setTimeEntries(await retrieveTimeEntries(endpoint));
  }

  useEffect(() => {
    fetchTimeEntries();
  }, []);

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

  return (
    <Styled.TimeEntries>
      {timeEntries
        .sort((a, b) => (new Date(a.startTimestamp) < new Date(b.startTimestamp) ? -1 : 1))
        .map((timeEntry, i, entries) => {
          const currentDate = timestampToDateString(timeEntry.startTimestamp, dateOptionsSort);

          const isDateDifferent =
            i > 0
              ? timestampToDateString(entries[i - 1].startTimestamp, dateOptionsSort) < currentDate
              : true;

          return (
            <React.Fragment key={timeEntry.id}>
              {isDateDifferent && (
                <Styled.TimeEntryHeader>
                  {timestampToDateString(timeEntry.startTimestamp, dateOptionsDisplay)}
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
function fetchTimeEntries() {
  throw new Error("Function not implemented.");
}
