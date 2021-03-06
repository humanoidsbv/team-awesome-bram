import { ChangeEvent, FormEvent, useContext, useEffect, useRef } from "react";

import * as Styled from "./TimeEntryModal.styled";
import { StoreContext } from "../../providers/storeProvider";

import { NewTimeEntryProps } from "../../types/Types";

import CloseButtonIcon from "../../../public/images/close.svg";

import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Modal } from "../modal/Modal";

interface TimeEntryModalProps {
  clients: { id: number; name: string }[];
  duration: string;
  handleChange: ({
    target,
  }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  newTimeEntry: Partial<NewTimeEntryProps>;
  onClose: () => void;
}

export const TimeEntryModal = ({
  clients,
  duration,
  handleChange,
  handleSubmit,
  newTimeEntry,
  onClose,
}: TimeEntryModalProps) => {
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
        <Styled.Title>New time entry</Styled.Title>
        <Styled.CloseButton ref={buttonRef} onClick={onClose}>
          <CloseButtonIcon fill="#000" width="14px" />
        </Styled.CloseButton>
      </Styled.TitleBar>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.InputContainer>
          <Styled.Label>Client</Styled.Label>
          <Styled.Select
            aria-label="Select client"
            value={newTimeEntry.client}
            name="client"
            onChange={handleChange}
            required
          >
            {clients.map(({ id, name }) => (
              <option label={name} key={id} value={name}>
                {name}
              </option>
            ))}
          </Styled.Select>
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
