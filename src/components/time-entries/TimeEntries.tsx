import React, { Fragment, useEffect, useState } from "react";

import * as Styled from "./TimeEntries.styled";
import { initialTimeEntriesProps, NewTimeEntryProps, TimeEntryProps } from "../../types/Types";

import { addTimeEntry, deleteTimeEntry } from "../../services/time-entry-api/";
import { calculateDuration, timestampToDateString } from "../../helpers/time-entry-helpers";

import { TimeEntryModal } from "../time-entry-modal";
import { Subheader } from "../subheader";
import { TimeEntry } from "../time-entry/TimeEntry";

export const TimeEntries = ({ initialTimeEntries }: initialTimeEntriesProps) => {
  const dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "2-digit",
  };

  const dateOptionsSort = {
    day: "numeric",
    month: "numeric",
    year: "2-digit",
  };

  const timezoneOffset = new Date().getTimezoneOffset() * 60000;
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
      const startTime = new Date(`${date} ${newTimeEntry.from}`);
      const endTime = new Date(`${date} ${newTimeEntry.to}`);
      const durationDate = new Date(endTime.getTime() - startTime.getTime() + timezoneOffset);

      setDuration(durationDate.toLocaleTimeString("nl-NL", timestampOptions));
    }
  }, [newTimeEntry.from, newTimeEntry.to, newTimeEntry.date]);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    const date = new Date(`${newTimeEntry.date}`).toDateString();
    const startTime = new Date(`${date}  ${newTimeEntry.from}`);
    const endTime = new Date(`${date}  ${newTimeEntry.to}`);

    const formattedNewTimeEntry = {
      client: `${newTimeEntry.client}`,
      startTimestamp: startTime.toJSON(),
      endTimestamp: endTime.toJSON(),
    };

    const addedTimeEntry = await addTimeEntry(formattedNewTimeEntry);
    if (addedTimeEntry) setTimeEntries([...timeEntries, addedTimeEntry]);

    setNewTimeEntry({});
    onClose();
  };

  const handleDelete = (client: string, id: number) => {
    if (window.confirm(`Are you sure you want to delete the ${client} entry?`)) {
      setTimeEntries(timeEntries.filter((timeEntry) => timeEntry.id != id));
      deleteTimeEntry(id);
    }
  };

  const [isModalActive, setIsModalActive] = useState(false);
  const onClose = () => setIsModalActive(false);

  const sortedTimeEntries = timeEntries.sort(
    (a, b) =>
      new Date(a.startTimestamp).getTime() - new Date(b.startTimestamp).getTime() + timezoneOffset,
  );

  let totalDuration = new Date(timezoneOffset);

  const totalDurationPerDate = sortedTimeEntries
    .map((timeEntry, i, entries) => {
      const currentDate = timestampToDateString(timeEntry.startTimestamp, dateOptionsSort);

      const isDateDifferent =
        i < entries.length - 1
          ? timestampToDateString(entries[i + 1].startTimestamp, dateOptionsSort) > currentDate
          : true;

      const currentDuration = calculateDuration(
        timeEntry.startTimestamp,
        timeEntry.endTimestamp,
      )[0];

      totalDuration = new Date(
        totalDuration.getTime() + currentDuration.getTime() - timezoneOffset,
      );

      if (isDateDifferent) {
        const totalDurationOfThisDate = totalDuration;
        totalDuration = new Date(timezoneOffset);

        return totalDurationOfThisDate.toLocaleTimeString("nl-NL", timestampOptions);
      } else {
        return "";
      }
    })
    .filter((timeEntryDuration) => timeEntryDuration != "");

  return (
    <>
      <Subheader
        buttonLabel="New time entry"
        buttonCallback={() => setIsModalActive(true)}
        subtitle={`${timeEntries.length}  Entries`}
        title="Timesheets"
      />
      <TimeEntryModal
        {...{ duration, handleSubmit, handleChange, isModalActive, newTimeEntry, onClose }}
      />
      <Styled.TimeEntries>
        {sortedTimeEntries.map((timeEntry, i, entries) => {
          const currentDate = timestampToDateString(timeEntry.startTimestamp, dateOptionsSort);

          const isDateDifferent =
            i > 0
              ? timestampToDateString(entries[i - 1].startTimestamp, dateOptionsSort) != currentDate
              : true;

          return (
            <Fragment key={timeEntry.id}>
              {isDateDifferent && (
                <Styled.TimeEntryHeader>
                  <Styled.Date>
                    {timestampToDateString(timeEntry.startTimestamp, dateOptions)}
                  </Styled.Date>
                  <Styled.Duration>{totalDurationPerDate.shift()}</Styled.Duration>
                </Styled.TimeEntryHeader>
              )}
              <Styled.TimeEntryContainer>
                <TimeEntry {...timeEntry} handleDelete={handleDelete} />
              </Styled.TimeEntryContainer>
            </Fragment>
          );
        })}
      </Styled.TimeEntries>
    </>
  );
};
