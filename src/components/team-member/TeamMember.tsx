import { TeamMemberProps } from "../../types/Types";

import * as Styled from "./TeamMember.styled";

import { timestampToDateString } from "../../helpers/time-entry-helpers";

export const TeamMember = ({
  firstName,
  lastName,
  role,
  employer,
  startingDate,
}: TeamMemberProps) => {
  const dateOptions = {
    month: "short",
    year: "numeric",
  };

  return (
    <Styled.TeamMember>
      <Styled.Profile>
        <Styled.Avatar src="/images/amijs.jpg" />
        <Styled.Wrapper width="auto">
          <Styled.Title>{`${firstName} ${lastName}`}</Styled.Title>
          <Styled.Label>{role}</Styled.Label>
        </Styled.Wrapper>
      </Styled.Profile>
      <Styled.Employment>
        <Styled.Wrapper alignRight width="auto">
          <Styled.Title>{employer}</Styled.Title>
          <Styled.Label>Employer</Styled.Label>
        </Styled.Wrapper>
        <Styled.Wrapper width="140px">
          <Styled.Title>{timestampToDateString(startingDate, dateOptions)}</Styled.Title>
          <Styled.Label>Starting date</Styled.Label>
        </Styled.Wrapper>
      </Styled.Employment>
    </Styled.TeamMember>
  );
};
