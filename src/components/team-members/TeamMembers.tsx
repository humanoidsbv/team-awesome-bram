import { ChangeEvent, useContext, useEffect, useState } from "react";

import * as Styled from "./TeamMembers.styled";

import { InitialTeamMembersProps, TeamMemberProps } from "../../types/Types";

import { addTeamMember } from "../../services/team-member-api";

import { StoreContext } from "../../providers/storeProvider";
import { Subheader } from "../subheader";
import { TeamMember } from "../team-member";
import { TeamMemberModal } from "../team-member-modal";

export const TeamMembers = ({ initialTeamMembers }: InitialTeamMembersProps) => {
  const [teamMembers, setTeamMembers] = useState<TeamMemberProps[]>([]);
  const [newTeamMember, setNewTeamMember] = useState<TeamMemberProps>({} as TeamMemberProps);

  const state = useContext(StoreContext);
  const [, setIsModalOpen] = state.isModalOpen;

  const onClose = () => setIsModalOpen(false);

  useEffect(() => setTeamMembers(initialTeamMembers), []);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setNewTeamMember({ ...newTeamMember, [target.name]: target.value });
  };

  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    const addedTeamMember: TeamMemberProps = await addTeamMember(newTeamMember);
    if (addedTeamMember) setTeamMembers([...teamMembers, addedTeamMember]);

    setNewTeamMember({} as TeamMemberProps);
    onClose();
  };

  const sortOptions = [
    { value: "firstName", label: "First name" },
    { value: "lastName", label: "Last name" },
    { value: "startingDate", label: "Date" },
    { value: "employer", label: "Employer" },
    { value: "role", label: "Role" },
  ];
  type sortOptionValues = "firstName" | "lastName" | "startingDate" | "employer" | "role";
  const [sortOption, setSortOption] = useState<sortOptionValues>("firstName");

  return (
    <>
      <Subheader
        buttonLabel="New Humanoid"
        buttonCallback={() => setIsModalOpen(true)}
        subtitle={`${teamMembers.length} Humanoids`}
        title="Team members"
      />
      <TeamMemberModal {...{ handleChange, handleSubmit, newTeamMember, onClose }} />
      <Styled.SelectorBar>
        <Styled.Select onChange={(e) => setSortOption(e.target.value as sortOptionValues)}>
          <option value={sortOptions[0].value}>Sort by: </option>
          {sortOptions.map(({ label, value }) => (
            <option key={value} label={label} value={value}>
              {label}
            </option>
          ))}
        </Styled.Select>
      </Styled.SelectorBar>
      <Styled.TeamMembers>
        {teamMembers
          .sort((a, b) => a[sortOption].localeCompare(b[sortOption]))
          .map((teamMember) => (
            <TeamMember key={teamMember.id} {...teamMember} />
          ))}
      </Styled.TeamMembers>
    </>
  );
};
