export type TimeEntryProps = {
  client: string;
  endTimestamp: string;
  id: number;
  startTimestamp: string;
};

export type NewTimeEntryProps = {
  activity: string;
  client: string;
  date: string;
  from: string;
  to: string;
  id: number;
};

interface initialTimeEntriesProps {
  initialTimeEntries: TimeEntryProps[];
}
