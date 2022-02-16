import * as Styled from "./TimeEntry.styled";
import { TimeEntryProps } from "../../types/Types";

import TrashBin from "../../../public/images/trash-bin.svg";

export const TimeEntry = ({ id, client, startTimestamp, endTimestamp }: TimeEntryProps) => {
  const startTimestampDate = new Date(startTimestamp);
  const endTimestampDate = new Date(endTimestamp);

  const timestampOptions: {} = { hour: "2-digit", minute: "2-digit" };

  const formattedStartTimestamp = startTimestampDate.toLocaleTimeString("nl-NL", timestampOptions);
  const formattedEndTimestamp = endTimestampDate.toLocaleTimeString("nl-NL", timestampOptions);

  const duration = new Date(endTimestampDate.getTime() - startTimestampDate.getTime() - 3600000);

  return (
    <Styled.TimeEntryWrapper>
      <Styled.TimeEntry>
        <Styled.OrganizationLabel>{client}</Styled.OrganizationLabel>
        <Styled.HoursWrapper>
          <Styled.Hours>
            {formattedStartTimestamp} - {formattedEndTimestamp}
          </Styled.Hours>
          <Styled.TotalHours>
            {duration.toLocaleTimeString("nl-NL", timestampOptions)}
          </Styled.TotalHours>
        </Styled.HoursWrapper>
      </Styled.TimeEntry>
      <Styled.DeleteButton>
        <TrashBin />
      </Styled.DeleteButton>
    </Styled.TimeEntryWrapper>
  );
};
