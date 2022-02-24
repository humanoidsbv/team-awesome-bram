import React, { Fragment, useEffect, useState } from "react";

import * as Styled from "./TimeEntries.styled";
import { initialTimeEntriesProps, NewTimeEntryProps, TimeEntryProps } from "../../types/Types";

import {
  addTimeEntry,
  calculateDuration,
  timestampToDateString,
} from "../../services/time-entry-api/";

import { TimeEntryModal } from "../time-entry-modal";
import { Subheader } from "../subheader";
import { TimeEntry } from "../time-entry/TimeEntry";

export const TimeEntries = ({ initialTimeEntries }: initialTimeEntriesProps) => {
  const dateOptions: {} = {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "2-digit",
  };

  const timestampOptions: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit" };

  const [timeEntries, setTimeEntries] = useState<TimeEntryProps[]>([]);
  const [newTimeEntry, setNewTimeEntry] = useState({} as Partial<NewTimeEntryProps>);
  const [duration, setDuration] = useState("--:--");

  useEffect(() => {
    setTimeEntries(initialTimeEntries);
  }, []);

  useEffect(() => {
    if (newTimeEntry.from && newTimeEntry.to && newTimeEntry.date) {
      const date = new Date(`${newTimeEntry.date}`).toDateString();
      const startTime = new Date(date + " " + newTimeEntry.from);
      const endTime = new Date(date + " " + newTimeEntry.to);

      const durationDate = new Date(endTime.getTime() - startTime.getTime() - 3600000);

      setDuration(durationDate.toLocaleTimeString("nl-NL", timestampOptions));
    }
  }, [newTimeEntry.from, newTimeEntry.to, newTimeEntry.date]);

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

    addTimeEntry(formattedNewTimeEntry);
    setTimeEntries([...timeEntries, formattedNewTimeEntry]);

    setNewTimeEntry({});
    onClose();
  }

  const [isModalActive, setIsModalActive] = useState(false);
  const onClose = () => setIsModalActive(false);

  const buttonCallback = () => setIsModalActive(true);
  const buttonLabel = "New time entry";
  const subtitle = timeEntries.length + " Entries";
  const title = "Timesheet";

  const timeEntriesDates = Array.from(
    timeEntries.reduce(
      (dates, timeEntry) => dates.add(timestampToDateString(timeEntry.startTimestamp, dateOptions)),
      new Set(),
    ),
  ) as string[];

  console.log(timeEntriesDates);

  const timeEntriesDatesArray = timeEntriesDates.map((timeEntryDate) =>
    timeEntries.filter(
      (timeEntry) => timestampToDateString(timeEntry.startTimestamp, dateOptions) == timeEntryDate,
    ),
  );

  console.log(timeEntriesDatesArray);
  return (
    <>
      <Subheader {...{ buttonLabel, buttonCallback, subtitle, title }} />
      <TimeEntryModal
        {...{ duration, handleSubmit, handleChange, isModalActive, newTimeEntry, onClose }}
      />
      <Styled.TimeEntries>
        {timeEntriesDatesArray.map((timeEntries, i) => {
          const timeEntriesDuration = timeEntries.map(
            (timeEntry) =>
              new Date(
                calculateDuration(timeEntry.startTimestamp, timeEntry.endTimestamp)[0].getTime(),
              ),
          );

          const totalDuration = timeEntriesDuration.reduce(
            (previousValue, currentValue) =>
              new Date(previousValue.getTime() + currentValue.getTime() + 3600000),
            new Date(-3600000),
          );

          return (
            <Fragment key={timeEntriesDates[i]}>
              <Styled.TimeEntryHeader>
                <Styled.Date>{timeEntriesDates[i]}</Styled.Date>
                <Styled.Duration>
                  {totalDuration.toLocaleTimeString("nl-NL", timestampOptions)}
                </Styled.Duration>
              </Styled.TimeEntryHeader>
              <Styled.TimeEntryContainer>
                {timeEntries.map((timeEntry) => (
                  <TimeEntry {...timeEntry} />
                ))}
              </Styled.TimeEntryContainer>
            </Fragment>
          );
        })}
      </Styled.TimeEntries>
    </>
  );
};
