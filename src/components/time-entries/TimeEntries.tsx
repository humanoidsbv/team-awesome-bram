import React, { Fragment, useEffect, useState } from "react";

import * as Styled from "./TimeEntries.styled";
import { initialTimeEntriesProps, NewTimeEntryProps, TimeEntryProps } from "../../types/Types";

import { addTimeEntry, timestampToDateString } from "../../services/time-entry-api/";

import { TimeEntryModal } from "../time-entry-modal";
import { Subheader } from "../subheader";
import { TimeEntry } from "../time-entry/TimeEntry";

export const TimeEntries = ({ initialTimeEntries }: initialTimeEntriesProps) => {
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
  const [newTimeEntry, setNewTimeEntry] = useState({} as Partial<NewTimeEntryProps>);

  useEffect(() => {
    setTimeEntries(initialTimeEntries);
  }, []);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  function handleSubmit(event: Event) {
    event.preventDefault();

    const date = new Date(`${newTimeEntry.date}`).toDateString();
    const startTime = new Date(date + " " + newTimeEntry.from);
    const endTime = new Date(date + " " + newTimeEntry.to);

    const formattedNewTimeEntry = {
      id: Math.random() * 1000,
      client: `${newTimeEntry.client}`,
      startTimestamp: startTime.toJSON(),
      endTimestamp: endTime.toJSON(),
    };

    console.log(formattedNewTimeEntry);

    addTimeEntry(formattedNewTimeEntry);
    setTimeEntries([...timeEntries, formattedNewTimeEntry]);

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
