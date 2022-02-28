export type TimeEntryProps = {
  client: string;
  endTimestamp: string;
  id?: number;
  startTimestamp: string;
};

export type NewTimeEntryProps = {
  activity: string;
  client: string;
  date: string;
  from: string;
  id: number;
  to: string;
};

interface initialTimeEntriesProps {
  initialTimeEntries: TimeEntryProps[];
}
