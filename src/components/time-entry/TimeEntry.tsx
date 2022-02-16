import * as Styled from "./TimeEntry.styled";

import TrashBin from "../../../public/images/trash-bin.svg";

export const TimeEntry = () => {
  return (
    <Styled.TimeEntryWrapper>
      <Styled.TimeEntry>
        <Styled.OrganizationLabel>Port of Rotterdam</Styled.OrganizationLabel>
        <Styled.HoursWrapper>
          <Styled.Hours>09:00 - 17:00</Styled.Hours>
          <Styled.TotalHours>08:00</Styled.TotalHours>
        </Styled.HoursWrapper>
      </Styled.TimeEntry>
      <Styled.DeleteButton>
        <TrashBin />
      </Styled.DeleteButton>
    </Styled.TimeEntryWrapper>
  );
};
