import * as Styled from "./TimeEntryModal.styled";

import CloseButtonIcon from "../../../public/images/close.svg";

import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Modal } from "../modal/Modal";

interface NewTimeEntryProps {
  isModalActive: boolean;
  onClose: () => void;
}

export const TimeEntryModal = ({ isModalActive, onClose }: NewTimeEntryProps) => {
  const buttonLabel = "Add time entry";
  const title = "New time entry";

  return (
    <Modal {...{ isModalActive, onClose }}>
      <Styled.TitleBar>
        <Styled.Title>{title}</Styled.Title>
        <Styled.CloseButton onClick={onClose}>
          <CloseButtonIcon fill="#000" width="14px" />
        </Styled.CloseButton>
      </Styled.TitleBar>
      <Styled.Form>
        <Styled.InputContainer>
          <Input label="Client" inputType="text" />
          <Input label="Activity" inputType="text" />
          <Styled.DateTimeContainer>
            <Styled.DateInputWrapper>
              <Input label="Date" inputType="date" />
            </Styled.DateInputWrapper>
            <Styled.TimeContainer>
              <Styled.TimeInputContainer>
                <Styled.TimeInputWrapper>
                  <Input label="From" inputType="time" />
                </Styled.TimeInputWrapper>
                <Styled.TimeInputWrapper>
                  <Input label="To" inputType="time" />
                </Styled.TimeInputWrapper>
              </Styled.TimeInputContainer>
              <Styled.TotalTimeWrapper>
                <Styled.Label>Total</Styled.Label>
                <Styled.TotalTime>08:00</Styled.TotalTime>
              </Styled.TotalTimeWrapper>
            </Styled.TimeContainer>
          </Styled.DateTimeContainer>
        </Styled.InputContainer>
        <Styled.ButtonBar>
          <Button label={"Cancel"} onClick={onClose} secondary />
          <Button label={buttonLabel} />
        </Styled.ButtonBar>
      </Styled.Form>
    </Modal>
  );
};
