export type TimeEntryProps = {
  client: string;
  endTimestamp: string;
  id: number;
  startTimestamp: string;
};

export type newTimeEntryProps = {
  activity?: string;
  client?: string;
  date?: string;
  from?: string;
  to?: string;
};
