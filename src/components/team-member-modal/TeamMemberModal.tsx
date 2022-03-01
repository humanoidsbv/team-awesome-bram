import * as Styled from "./TeamMemberModal.styled";

import CloseButtonIcon from "../../../public/images/close.svg";

import { Button } from "../button";
import { Modal } from "../modal";
import { TeamMemberProps } from "../../types/Types";

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
          <Styled.InputWrapper>
            <Styled.Label>First name</Styled.Label>
            <Styled.Input
              minLength={3}
              name="firstName"
              onChange={handleChange}
              required
              type="text"
              value={newTeamMember.firstName ?? ""}
            />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.Label>Last name</Styled.Label>
            <Styled.Input
              minLength={3}
              name="lastName"
              onChange={handleChange}
              required
              type="text"
              value={newTeamMember.lastName ?? ""}
            />
          </Styled.InputWrapper>
        </Styled.InputContainer>
        <Styled.InputWrapper>
          <Styled.Label>E-mail address</Styled.Label>
          <Styled.Input
            name="emailAddress"
            onChange={handleChange}
            required
            type="email"
            value={newTeamMember.emailAddress ?? ""}
          />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.Label>Label</Styled.Label>
          <Styled.Input
            minLength={3}
            name="label"
            moreHeight
            onChange={handleChange}
            type="text"
            value={newTeamMember.label ?? ""}
          />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.Label>Employer</Styled.Label>
          <Styled.Input
            minLength={3}
            name="employer"
            onChange={handleChange}
            required
            type="text"
            value={newTeamMember.employer ?? ""}
          />
        </Styled.InputWrapper>
        <Styled.InputContainer>
          <Styled.InputWrapper>
            <Styled.Label>Role</Styled.Label>
            <Styled.Input
              minLength={3}
              name="role"
              onChange={handleChange}
              required
              type="text"
              value={newTeamMember.role ?? ""}
            />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.Label>Starting date</Styled.Label>
            <Styled.Input
              name="startingDate"
              onChange={handleChange}
              required
              type="date"
              value={newTeamMember.startingDate ?? "lo"}
            />
          </Styled.InputWrapper>
        </Styled.InputContainer>
        <Styled.ButtonBar>
          <Button label={"Cancel"} onClick={onClose} secondary type="reset" />
          <Button label="Add Humanoid" type="submit" />
        </Styled.ButtonBar>
      </Styled.Form>
    </Modal>
  );
};
