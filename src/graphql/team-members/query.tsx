import { gql } from "@apollo/client";

export const GET_TEAM_MEMBERS = gql`
  query getTeamMembers {
    allTeamMembers {
      emailAddress
      employer
      firstName
      id
      label
      lastName
      role
      startingDate
    }
  }
`;
