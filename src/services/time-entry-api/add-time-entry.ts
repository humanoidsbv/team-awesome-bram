import { TimeEntryProps } from "../../types/Types";
import { NotFoundError } from "../../errors/not-found-error";

export const addTimeEntry = async (newTimeEntry: Partial<TimeEntryProps>) => {
  return fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/time-entries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTimeEntry),
  })
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError(response.toString());
      }

      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};
