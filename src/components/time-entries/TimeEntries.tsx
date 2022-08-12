import { ChangeEvent, FormEvent, Fragment, useContext, useEffect, useState } from "react";

import { useMutation, useQuery } from "@apollo/client";
import { StoreContext } from "../../providers/storeProvider";

import * as Styled from "./TimeEntries.styled";
import { ADD_TIME_ENTRY, GET_TIME_ENTRIES, REMOVE_TIME_ENTRY } from "../../graphql/time-entries";
import { TimeEntriesProps, NewTimeEntryProps, TimeEntryProps } from "../../types/Types";

import {
  calculateDuration,
  formatDuration,
  timestampToDateString,
} from "../../helpers/time-entry-helpers";

import { TimeEntryModal } from "../time-entry-modal";
import { Subheader } from "../subheader";
import { TimeEntry } from "../time-entry/TimeEntry";

export const TimeEntries = ({ clients }: TimeEntriesProps) => {
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

  const { data ={}, loading } = useQuery(GET_TIME_ENTRIES);
  const { allTimeEntries = {} } = data;

  const [, setIsModalOpen] = state.isModalOpen;

  const [addNewTimeEntry] = useMutation(ADD_TIME_ENTRY, {refetchQueries: [{query: GET_TIME_ENTRIES}]});
  const [deleteTimeEntry] = useMutation(REMOVE_TIME_ENTRY);
  



  const [newTimeEntry, setNewTimeEntry] = useState({} as Partial<NewTimeEntryProps>);
  const [duration, setDuration] = useState("--:--");
  const [clientFilter, setClientFilter] = useState("");


  useEffect(() => {
    if (newTimeEntry.from && newTimeEntry.to && newTimeEntry.date) {
      const date = new Date(`${newTimeEntry.date}`).toDateString();
      const startTime = new Date(`${date} ${newTimeEntry.from}`);
      const endTime = new Date(`${date} ${newTimeEntry.to}`);
      const _duration = endTime.getTime() - startTime.getTime();

      setDuration(formatDuration(_duration));
    }
  }, [newTimeEntry.from, newTimeEntry.to, newTimeEntry.date]);

  const handleChange = ({
    target,
  }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  const onClose = () => setIsModalOpen(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const date = new Date(`${newTimeEntry.date}`).toDateString();
    const endTimestamp = new Date(`${date}  ${newTimeEntry.to}`).toJSON();
    const startTimestamp = new Date(`${date}  ${newTimeEntry.from}`).toJSON();
    const client = `${newTimeEntry.client ?? clients[0].name}`;

    await addNewTimeEntry({
      variables: {
        client,
        endTimestamp,
        startTimestamp,
      },
    });
    setNewTimeEntry({});

    onClose();
  };

  const handleDelete = async (client: string, id: number) => {
    if (window.confirm(`Are you sure you want to delete the ${client} entry?`)) {
      await deleteTimeEntry({
        variables: {
          id,
        },
  
        update: (cache) => {
          cache.writeQuery({
            query:  GET_TIME_ENTRIES,
            data: {
              allTimeEntries: allTimeEntries.filter((timeEntry: TimeEntryProps) => timeEntry.id !== id)
            }
          })
         
      }});
    }
  };

  const getDurationByDay = (date: string, _timeEntries: TimeEntryProps[]) => {
    const totalDuration = new Date(
      _timeEntries
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
    return formatDuration(totalDuration.getTime());
  };

  useEffect(() => {
      console.log("FRESH")
  }, [allTimeEntries])

  return (
    <>
      <Subheader
        buttonLabel="New time entry"
        buttonCallback={() => setIsModalOpen(true)}
        subtitle={`${allTimeEntries.length}  Entries`}
        title="Timesheets"
      />
      <TimeEntryModal
        {...{ clients, duration, handleSubmit, handleChange, newTimeEntry, onClose }}
      />
      <Styled.SelectorBar>
        <Styled.Select
          aria-label="Filter time entries"
          onChange={(e) => setClientFilter(e.target.value)}
        >
          <option label="Select client" value="">
            Select client
          </option>
          {clients.map(({ id, name }: { id: number; name: string }) => (
            <option key={id} label={name} value={name}>
              {name}
            </option>
          ))}
        </Styled.Select>
      </Styled.SelectorBar>
      <Styled.TimeEntries>
        {loading && <p>Loading....</p>}
        {allTimeEntries.length && 
         allTimeEntries?.filter((timeEntry: TimeEntryProps) => (clientFilter !== "" ? timeEntry.client === clientFilter : true))
          .sort(
            (a: { startTimestamp: string | number | Date; }, b: { startTimestamp: string | number | Date; }) => new Date(a.startTimestamp).getTime() - new Date(b.startTimestamp).getTime(),
          )
          .map((timeEntry: TimeEntryProps, i: number, entries: TimeEntryProps[]) => {
            const currentDate = timestampToDateString(timeEntry.startTimestamp, dateOptionsSort);

            const isDateDifferent =
              i > 0
                ? timestampToDateString(entries[i - 1].startTimestamp, dateOptionsSort) !==
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
                      {getDurationByDay(timeEntry.startTimestamp, allTimeEntries)}
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
