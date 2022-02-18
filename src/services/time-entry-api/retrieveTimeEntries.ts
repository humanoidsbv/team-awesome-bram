import { TimeEntryProps } from "../../types/Types";
import { NotFoundError } from "../../errors/not-found-error/NotFoundError";

export async function retrieveTimeEntries(endpoint: string): Promise<TimeEntryProps[]> {
  return fetch(endpoint)
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError(response.toString());
      }

      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
}
