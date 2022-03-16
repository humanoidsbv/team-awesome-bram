import { gql } from "@apollo/client";

export const ADD_TEAM_MEMBER = gql`
  mutation createTeamMember(
    $emailAddress: String!
    $firstName: String!
    $lastName: String!
    $role: String!
    $employer: String!
    $startingDate: String!
  ) {
    createTeamMember(
      emailAddress: $emailAddress
      firstName: $firstName
      lastName: $lastName
      role: $role
      employer: $employer
      startingDate: $startingDate
    ) {
      emailAddress
      firstName
      lastName
      role
      employer
      startingDate
    }
  }
`;
