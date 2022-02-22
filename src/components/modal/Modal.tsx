import { createPortal } from "react-dom";
import { ReactNode } from "react";

import * as Styled from "./Modal.styled";

interface ModalProp {
  children: ReactNode;
  isModalActive: boolean;
  onClose: () => void;
}

export const Modal = ({ children, onClose, isModalActive }: ModalProp) => {
  return isModalActive
    ? createPortal(
        <Styled.ModalBackdrop onClick={onClose}>
          <Styled.Modal onClick={(e) => e.stopPropagation()}>{children}</Styled.Modal>
        </Styled.ModalBackdrop>,
        document.body,
      )
    : null;
};
