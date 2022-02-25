import * as Styled from "./TimeEntry.styled";
import { TimeEntryProps } from "../../types/Types";

import { calculateDuration } from "../../helpers/time-entry-helpers";

import TrashBin from "../../../public/images/trash-bin.svg";

interface TimeEntryComponentProps extends TimeEntryProps {
  handleDelete: (client: string, id: number) => void;
}
export const TimeEntry = ({
  client,
  endTimestamp,
  id,
  startTimestamp,
  handleDelete,
}: TimeEntryComponentProps) => {
  const [duration, startTimestampDate, endTimestampDate] = calculateDuration(
    startTimestamp,
    endTimestamp,
  );

  const timestampOptions: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit" };

  const formattedStartTimestamp = startTimestampDate.toLocaleTimeString("nl-NL", timestampOptions);
  const formattedEndTimestamp = endTimestampDate.toLocaleTimeString("nl-NL", timestampOptions);

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
      <Styled.DeleteButton onClick={() => handleDelete(client, id)}>
        <TrashBin />
      </Styled.DeleteButton>
    </Styled.TimeEntryWrapper>
  );
};
