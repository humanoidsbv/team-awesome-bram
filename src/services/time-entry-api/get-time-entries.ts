import { TimeEntryProps } from "../../types/Types";
import { NotFoundError } from "../../errors/not-found-error";

export const getTimeEntries = async (): Promise<TimeEntryProps[]> => {
  return fetch("http://localhost:3004/time-entries")
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError(response.toString());
      }

      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};
