import * as Styled from "./TimeEntry.styled";
import { TimeEntryProps } from "../../types/Types";

import TrashBin from "../../../public/images/trash-bin.svg";

export const TimeEntry = ({ id, client, startTimestamp, endTimestamp }: TimeEntryProps) => {
  const startTimestampDate: Date = new Date(startTimestamp);
  const endTimestampDate: Date = new Date(endTimestamp);

  const timestampOptions: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit" };

  const formattedStartTimestamp = startTimestampDate.toLocaleTimeString("nl-NL", timestampOptions);
  const formattedEndTimestamp = endTimestampDate.toLocaleTimeString("nl-NL", timestampOptions);

  const duration: Date = new Date(
    endTimestampDate.getTime() - startTimestampDate.getTime() - 3600000,
  );

  return (
    <Styled.TimeEntryWrapper>
      <Styled.TimeEntry>
        <Styled.ClientLabel>{client}</Styled.ClientLabel>
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
