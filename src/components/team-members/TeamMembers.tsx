import { useContext, useEffect, useState } from "react";

import * as Styled from "./TeamMembers.styled";

import { initialTeamMembersProps, TeamMemberProps } from "../../types/Types";

import { addTeamMember } from "../../services/team-member-api";

import { Subheader } from "../subheader";
import { TeamMember } from "../team-member";
import { TeamMemberModal } from "../team-member-modal";
import { StoreContext } from "../../providers/storeProvider";

export const TeamMembers = ({ initialTeamMembers }: initialTeamMembersProps) => {
  const [teamMembers, setTeamMembers] = useState<TeamMemberProps[]>([]);
  const [newTeamMember, setNewTeamMember] = useState<TeamMemberProps>({} as TeamMemberProps);

  const state = useContext(StoreContext);
  const [, setIsModalOpen] = state.isModalOpen;

  const onClose = () => setIsModalOpen(false);

  useEffect(() => setTeamMembers(initialTeamMembers), []);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setNewTeamMember({ ...newTeamMember, [target.name]: target.value });
  };

  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    const addedTeamMember: TeamMemberProps = await addTeamMember(newTeamMember);
    if (addedTeamMember) setTeamMembers([...teamMembers, addedTeamMember]);

    setNewTeamMember({} as TeamMemberProps);
    onClose();
  };

  return (
    <>
      <Subheader
        buttonLabel="New Humanoid"
        buttonCallback={() => setIsModalOpen(true)}
        subtitle={`${teamMembers.length} Humanoids`}
        title="Team members"
      />
      <TeamMemberModal {...{ handleChange, handleSubmit, newTeamMember, onClose }} />
      <Styled.TeamMembers>
        {teamMembers.map((teamMember) => (
          <TeamMember key={teamMember.id} {...teamMember} />
        ))}
      </Styled.TeamMembers>
    </>
  );
};
