import * as Styled from "./TimeEntryModal.styled";
import { newTimeEntryProps } from "../../types/Types";

import CloseButtonIcon from "../../../public/images/close.svg";

import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Modal } from "../modal/Modal";

interface TimeEntryModalProps {
  handleChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  // TODO: remove any type
  handleSubmit: (event: any) => void;
  isModalActive: boolean;
  newTimeEntry: newTimeEntryProps;
  onClose: () => void;
}

export const TimeEntryModal = ({
  handleChange,
  handleSubmit,
  isModalActive,
  newTimeEntry,
  onClose,
}: TimeEntryModalProps) => {
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
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.InputContainer>
          <Input
            type="text"
            value={newTimeEntry.client ?? ""}
            label="Client"
            minLength={3}
            name="client"
            required
            onChange={handleChange}
          />
          <Input
            type="text"
            value={newTimeEntry.activity ?? ""}
            label="Activity"
            minLength={3}
            name="activity"
            required
            onChange={handleChange}
          />
          <Styled.DateTimeContainer>
            <Styled.DateInputWrapper>
              <Input
                type="date"
                value={newTimeEntry.date ?? ""}
                label="Date"
                name="date"
                required
                onChange={handleChange}
              />
            </Styled.DateInputWrapper>
            <Styled.TimeContainer>
              <Styled.TimeInputContainer>
                <Styled.TimeInputWrapper>
                  <Input
                    type="time"
                    value={newTimeEntry.from ?? ""}
                    label="From"
                    name="from"
                    required
                    onChange={handleChange}
                  />
                </Styled.TimeInputWrapper>
                <Styled.TimeInputWrapper>
                  <Input
                    type="time"
                    value={newTimeEntry.to ?? ""}
                    label="To"
                    name="to"
                    required
                    onChange={handleChange}
                  />
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
          <Button label={"Cancel"} onClick={onClose} secondary type="reset" />
          <Button label={buttonLabel} type="submit" />
        </Styled.ButtonBar>
      </Styled.Form>
    </Modal>
  );
};
