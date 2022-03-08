import { TeamMemberProps } from "../../types/Types";
import { NotFoundError } from "../../errors/not-found-error";

export const getTeamMembers = async (): Promise<TeamMemberProps[]> => {
  return fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/team-members`)
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError(response.toString());
      }

      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};
