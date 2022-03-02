import * as Styled from "./TimeEntryModal.styled";

import { NewTimeEntryProps } from "../../types/Types";

import CloseButtonIcon from "../../../public/images/close.svg";

import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Modal } from "../modal/Modal";

interface TimeEntryModalProps {
  duration: string;
  handleChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: any) => void;

  newTimeEntry: Partial<NewTimeEntryProps>;
  onClose: () => void;
}

export const TimeEntryModal = ({
  duration,
  handleChange,
  handleSubmit,

  newTimeEntry,
  onClose,
}: TimeEntryModalProps) => {
  return (
    <Modal {...{ onClose }}>
      <Styled.TitleBar>
        <Styled.Title>New time entry</Styled.Title>
        <Styled.CloseButton onClick={onClose}>
          <CloseButtonIcon fill="#000" width="14px" />
        </Styled.CloseButton>
      </Styled.TitleBar>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.InputContainer>
          <Input
            label="Client"
            minLength={3}
            name="client"
            onChange={handleChange}
            required
            type="text"
            value={newTimeEntry.client ?? ""}
          />
          <Input
            label="Activity"
            minLength={3}
            name="activity"
            onChange={handleChange}
            required
            type="text"
            value={newTimeEntry.activity ?? ""}
          />
          <Styled.DateTimeContainer>
            <Styled.DateInputWrapper>
              <Input
                label="Date"
                name="date"
                onChange={handleChange}
                required
                type="date"
                value={newTimeEntry.date ?? ""}
              />
            </Styled.DateInputWrapper>
            <Styled.TimeContainer>
              <Styled.TimeInputContainer>
                <Styled.TimeInputWrapper>
                  <Input
                    label="From"
                    name="from"
                    onChange={handleChange}
                    required
                    type="time"
                    value={newTimeEntry.from ?? ""}
                  />
                </Styled.TimeInputWrapper>
                <Styled.TimeInputWrapper>
                  <Input
                    label="To"
                    name="to"
                    onChange={handleChange}
                    required
                    type="time"
                    value={newTimeEntry.to ?? ""}
                  />
                </Styled.TimeInputWrapper>
              </Styled.TimeInputContainer>
              <Styled.TotalTimeWrapper>
                <Styled.Label>Total</Styled.Label>
                <Styled.TotalTime>{duration}</Styled.TotalTime>
              </Styled.TotalTimeWrapper>
            </Styled.TimeContainer>
          </Styled.DateTimeContainer>
        </Styled.InputContainer>
        <Styled.ButtonBar>
          <Button label="Cancel" onClick={onClose} secondary type="reset" />
          <Button label="Add time entry" type="submit" />
        </Styled.ButtonBar>
      </Styled.Form>
    </Modal>
  );
};
