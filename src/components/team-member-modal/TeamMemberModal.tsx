import * as Styled from "./TeamMemberModal.styled";

import CloseButtonIcon from "../../../public/images/close.svg";

import { TeamMemberProps } from "../../types/Types";

import { Button } from "../button";
import { Input } from "../input";
import { Modal } from "../modal";

interface TeamMemberModal {
  handleChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: any) => void;
  isModalActive: boolean;
  newTeamMember: TeamMemberProps;
  onClose: () => void;
}

export const TeamMemberModal = ({
  handleChange,
  handleSubmit,
  newTeamMember,
  isModalActive,
  onClose,
}: TeamMemberModal) => {
  return (
    <Modal {...{ isModalActive, onClose }}>
      <Styled.TitleBar>
        <Styled.Title>New Humanoid</Styled.Title>
        <Styled.CloseButton onClick={onClose}>
          <CloseButtonIcon fill="#000" width="14px" />
        </Styled.CloseButton>
      </Styled.TitleBar>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.AvatarWrapper>
          <Styled.Avatar src="images/amijs.jpg" />
          <Styled.AvatarLabel>Edit Avatar</Styled.AvatarLabel>
        </Styled.AvatarWrapper>
        <Styled.InputContainer>
          <Input
            minLength={3}
            name="firstName"
            label="First Name"
            onChange={handleChange}
            required
            type="text"
            value={newTeamMember.firstName ?? ""}
          />
          <Input
            minLength={3}
            name="lastName"
            label="Last name"
            onChange={handleChange}
            required
            type="text"
            value={newTeamMember.lastName ?? ""}
          />
        </Styled.InputContainer>
        <Input
          name="emailAddress"
          label="E-mail-address"
          onChange={handleChange}
          required
          type="email"
          value={newTeamMember.emailAddress ?? ""}
        />
        <Input
          minLength={3}
          name="label"
          label="Label"
          moreHeight
          onChange={handleChange}
          type="text"
          value={newTeamMember.label ?? ""}
        />
        <Input
          minLength={3}
          name="employer"
          label="Employer"
          onChange={handleChange}
          required
          type="text"
          value={newTeamMember.employer ?? ""}
        />
        <Styled.InputContainer>
          <Input
            minLength={3}
            name="role"
            label="Role"
            onChange={handleChange}
            required
            type="text"
            value={newTeamMember.role ?? ""}
          />
          <Input
            name="startingDate"
            label="Starting date"
            onChange={handleChange}
            required
            type="date"
            value={newTeamMember.startingDate ?? "lo"}
          />
        </Styled.InputContainer>
        <Styled.ButtonBar>
          <Button label={"Cancel"} onClick={onClose} secondary type="reset" />
          <Button label="Add Humanoid" type="submit" />
        </Styled.ButtonBar>
      </Styled.Form>
    </Modal>
  );
};
