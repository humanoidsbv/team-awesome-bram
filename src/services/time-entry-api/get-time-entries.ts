import { TimeEntryProps } from "../../types/Types";
import { NotFoundError } from "../../errors/not-found-error";

export const getTimeEntries = async (): Promise<TimeEntryProps[]> => {
  return fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/time-entries`)
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError(response.toString());
      }

      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};
