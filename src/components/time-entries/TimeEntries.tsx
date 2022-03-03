import React, { Fragment, useContext, useEffect, useState } from "react";

import { StoreContext } from "../../providers/storeProvider";

import * as Styled from "./TimeEntries.styled";
import { initialProps, NewTimeEntryProps, TimeEntryProps } from "../../types/Types";

import { addTimeEntry, deleteTimeEntry } from "../../services/time-entry-api/";
import {
  calculateDuration,
  formatDuration,
  timestampToDateString,
} from "../../helpers/time-entry-helpers";

import { TimeEntryModal } from "../time-entry-modal";
import { Subheader } from "../subheader";
import { TimeEntry } from "../time-entry/TimeEntry";
import { time } from "console";

export const TimeEntries = ({ initialTimeEntries, clients }: initialProps) => {
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

  const state = useContext(StoreContext);
  const [timeEntries, setTimeEntries] = state.timeEntries;
  const [, setIsModalOpen] = state.isModalOpen;

  const [newTimeEntry, setNewTimeEntry] = useState({} as Partial<NewTimeEntryProps>);
  const [duration, setDuration] = useState("--:--");

  const [clientFilter, setClientFilter] = useState("");

  useEffect(() => {
    setTimeEntries(initialTimeEntries);
  }, []);

  useEffect(() => {
    if (newTimeEntry.from && newTimeEntry.to && newTimeEntry.date) {
      const date = new Date(`${newTimeEntry.date}`).toDateString();
      const startTime = new Date(`${date} ${newTimeEntry.from}`);
      const endTime = new Date(`${date} ${newTimeEntry.to}`);
      const duration = endTime.getTime() - startTime.getTime();

      setDuration(formatDuration(duration));
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

  const onClose = () => setIsModalOpen(false);

  const getDurationByDay = (date: string, timeEntries: TimeEntryProps[]) => {
    const duration = new Date(
      timeEntries
        .filter(({ client, startTimestamp }) =>
          new Date(startTimestamp).toDateString() === new Date(date).toDateString() &&
          clientFilter === ""
            ? true
            : client === clientFilter,
        )
        .reduce(
          (acc, { startTimestamp, endTimestamp }) =>
            acc + calculateDuration(startTimestamp, endTimestamp)[0].getTime(),
          0,
        ),
    );
    return formatDuration(duration.getTime());
  };

  return (
    <>
      <Subheader
        buttonLabel="New time entry"
        buttonCallback={() => setIsModalOpen(true)}
        subtitle={`${timeEntries.length}  Entries`}
        title="Timesheets"
      />
      <TimeEntryModal
        {...{ clients, duration, handleSubmit, handleChange, newTimeEntry, onClose }}
      />
      <Styled.SelectorBar>
        <Styled.Select onChange={(e) => setClientFilter(e.target.value)}>
          <option value={""}>Select client</option>
          {clients.map(({ name }) => (
            <option value={name}>{name}</option>
          ))}
        </Styled.Select>
      </Styled.SelectorBar>
      <Styled.TimeEntries>
        {timeEntries
          .filter((timeEntry) => (clientFilter !== "" ? timeEntry.client === clientFilter : true))
          .sort(
            (a, b) => new Date(a.startTimestamp).getTime() - new Date(b.startTimestamp).getTime(),
          )
          .map((timeEntry, i, entries) => {
            const currentDate = timestampToDateString(timeEntry.startTimestamp, dateOptionsSort);

            const isDateDifferent =
              i > 0
                ? timestampToDateString(entries[i - 1].startTimestamp, dateOptionsSort) !=
                  currentDate
                : true;

            return (
              <Fragment key={timeEntry.id}>
                {isDateDifferent && (
                  <Styled.TimeEntryHeader>
                    <Styled.Date>
                      {timestampToDateString(timeEntry.startTimestamp, dateOptions)}
                    </Styled.Date>
                    <Styled.Duration>
                      {getDurationByDay(timeEntry.startTimestamp, timeEntries)}
                    </Styled.Duration>
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
