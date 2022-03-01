import { useEffect, useState } from "react";
import * as Styled from "./TeamMembers.styled";

import { initialTeamMembersProps, TeamMemberProps } from "../../types/Types";

import { addTeamMember } from "../../services/team-member-api";

import { Subheader } from "../subheader";
import { TeamMember } from "../team-member";
import { TeamMemberModal } from "../team-member-modal";

export const TeamMembers = ({ initialTeamMembers }: initialTeamMembersProps) => {
  const [teamMembers, setTeamMembers] = useState<TeamMemberProps[]>([]);
  const [newTeamMember, setNewTeamMember] = useState<TeamMemberProps>({});

  const [isModalActive, setIsModalActive] = useState(false);
  const onClose = () => setIsModalActive(false);

  useEffect(() => setTeamMembers(initialTeamMembers), []);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setNewTeamMember({ ...newTeamMember, [target.name]: target.value });
  };

  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    console.log(newTeamMember);

    const addedTeamMember: TeamMemberProps = await addTeamMember(newTeamMember);
    if (addedTeamMember) setNewTeamMember([...teamMembers, addedTeamMember]);

    setNewTeamMember({} as TeamMemberProps);
    onClose();
  };

  return (
    <>
      <Subheader
        buttonLabel="New Humanoid"
        buttonCallback={() => setIsModalActive(true)}
        subtitle={`12 Humanoids`}
        title="Team members"
      />
      <TeamMemberModal {...{ handleChange, handleSubmit, isModalActive, newTeamMember, onClose }} />
      <Styled.TeamMembers>
        {teamMembers.map((teamMember) => {
          return <TeamMember key={teamMember.id} {...teamMember} />;
        })}
      </Styled.TeamMembers>
    </>
  );
};
