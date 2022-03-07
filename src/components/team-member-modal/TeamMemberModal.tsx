import { useContext, useEffect, useRef } from "react";

import * as Styled from "./TeamMemberModal.styled";
import { StoreContext } from "../../providers/storeProvider";

import CloseButtonIcon from "../../../public/images/close.svg";

import { TeamMemberProps } from "../../types/Types";

import { Button } from "../button";
import { Input } from "../input";
import { Modal } from "../modal";

interface TeamMemberModal {
  handleChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: any) => void;
  newTeamMember: TeamMemberProps;
  onClose: () => void;
}

export const TeamMemberModal = ({
  handleChange,
  handleSubmit,
  newTeamMember,
  onClose,
}: TeamMemberModal) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [isModalOpen] = useContext(StoreContext).isModalOpen;

  useEffect(() => {
    if (isModalOpen) {
      buttonRef.current?.focus();
    }
  }, [isModalOpen]);

  return (
    <Modal {...{ onClose }}>
      <Styled.TitleBar>
        <Styled.Title>New Humanoid</Styled.Title>
        <Styled.CloseButton ref={buttonRef} onClick={onClose}>
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
            label="First Name"
            minLength={3}
            name="firstName"
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
          fieldSize="large"
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
            value={newTeamMember.startingDate ?? ""}
          />
        </Styled.InputContainer>
        <Styled.ButtonBar>
          <Button label="Cancel" onClick={onClose} secondary type="reset" />
          <Button label="Add Humanoid" type="submit" />
        </Styled.ButtonBar>
      </Styled.Form>
    </Modal>
  );
};
