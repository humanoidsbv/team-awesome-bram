import { gql } from "@apollo/client";

export const GET_DATA = gql`
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
