import * as Styled from "./TimeEntry.styled";
import { TimeEntryProps } from "../../types/Types";

import TrashBin from "../../../public/images/trash-bin.svg";

export const TimeEntry = ({ id, client, startTimestamp, endTimestamp }: TimeEntryProps) => {
  return (
    <Styled.TimeEntryWrapper>
      <Styled.TimeEntry>
        <Styled.OrganizationLabel>{client}</Styled.OrganizationLabel>
        <Styled.HoursWrapper>
          <Styled.Hours>
            {startTimestamp} - {endTimestamp}
          </Styled.Hours>
          <Styled.TotalHours>08:00</Styled.TotalHours>
        </Styled.HoursWrapper>
      </Styled.TimeEntry>
      <Styled.DeleteButton>
        <TrashBin />
      </Styled.DeleteButton>
    </Styled.TimeEntryWrapper>
  );
};
