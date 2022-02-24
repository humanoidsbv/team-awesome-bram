import { TimeEntryProps } from "../../types/Types";
import { NotFoundError } from "../../errors/not-found-error";

export const addTimeEntry = async (newTimeEntry: TimeEntryProps) => {
  return fetch("http://localhost:3004/time-entries", {
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
