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
  id: number;
  to: string;
};

export interface initialProps {
  initialTimeEntries: TimeEntryProps[];
  clients: { id: number; name: string }[];
}

export type TeamMemberProps = {
  avatar: string;
  emailAddress: string;
  employer: string;
  firstName: string;
  id?: number;
  label: string;
  lastName: string;
  role: string;
  startingDate: string;
};

export interface initialTeamMembersProps {
  initialTeamMembers: TeamMemberProps[];
}
