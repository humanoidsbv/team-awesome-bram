import React, { Fragment, useEffect, useState } from "react";

import * as Styled from "./TimeEntries.styled";
import { NewTimeEntryProps, TimeEntryProps } from "../../types/Types";

import {
  addTimeEntry,
  retrieveTimeEntries,
  timestampToDateString,
} from "../../services/time-entry-api/";
import { NotFoundError } from "../../errors/not-found-error/";

import { TimeEntryModal } from "../time-entry-modal";
import { Subheader } from "../subheader";
import { TimeEntry } from "../time-entry/TimeEntry";

export const TimeEntries = () => {
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

  const [timeEntries, setTimeEntries] = useState<TimeEntryProps[]>([]);

  async function fetchTimeEntries() {
    const awaitTimeEntries = await retrieveTimeEntries();

    if (awaitTimeEntries instanceof NotFoundError) {
      console.log("404: Not found!");
      return;
    }
    setTimeEntries(awaitTimeEntries);
  }

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  const [newTimeEntry, setNewTimeEntry] = useState<NewTimeEntryProps>({});

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  function handleSubmit(event: Event) {
    event.preventDefault();

    const date = new Date(`${newTimeEntry.date}`).toDateString();
    const startTime = new Date(date + " " + newTimeEntry.from);
    const endTime = new Date(date + " " + newTimeEntry.to);

    addTimeEntry({
      id: Math.random() * 1000,
      client: `${newTimeEntry.client}`,
      startTimestamp: startTime.toJSON(),
      endTimestamp: endTime.toJSON(),
    });

    fetchTimeEntries();
    setNewTimeEntry({});
    onClose();
  }

  const [isModalActive, setIsModalActive] = useState(false);
  const onClose = () => setIsModalActive(false);

  const buttonCallback = () => setIsModalActive(true);
  const buttonLabel = "New time entry";
  const subtitle = "12 Entries";
  const title = "Timesheet";

  return (
    <>
      <Subheader {...{ buttonLabel, buttonCallback, subtitle, title }} />
      <TimeEntryModal {...{ handleSubmit, handleChange, isModalActive, newTimeEntry, onClose }} />
      <Styled.TimeEntries>
        {timeEntries
          .sort((a, b) => (new Date(a.startTimestamp) < new Date(b.startTimestamp) ? -1 : 1))
          .map((timeEntry, i, entries) => {
            const currentDate = timestampToDateString(timeEntry.startTimestamp, dateOptionsSort);

            const isDateDifferent =
              i > 0
                ? timestampToDateString(entries[i - 1].startTimestamp, dateOptionsSort) <
                  currentDate
                : true;

            return (
              <Fragment key={timeEntry.id}>
                {isDateDifferent && (
                  <Styled.TimeEntryHeader>
                    {timestampToDateString(timeEntry.startTimestamp, dateOptionsDisplay)}
                  </Styled.TimeEntryHeader>
                )}
                <Styled.TimeEntryContainer>
                  <TimeEntry {...timeEntry} />
                </Styled.TimeEntryContainer>
              </Fragment>
            );
          })}
      </Styled.TimeEntries>
    </>
  );
};
