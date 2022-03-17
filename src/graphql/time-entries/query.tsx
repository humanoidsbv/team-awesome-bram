import { gql } from "@apollo/client";

export const GET_TIME_ENTRIES_AND_CLIENTS = gql`
  query GetData {
    allTimeEntries {
      id
      client
      endTimestamp
      startTimestamp
    }
    allClients {
      id
      name
    }
  }
`;
