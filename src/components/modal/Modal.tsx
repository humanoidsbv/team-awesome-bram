import { createPortal } from "react-dom";
import { ReactNode, useContext } from "react";

import * as Styled from "./Modal.styled";
import { StoreContext } from "../../providers/storeProvider";

interface ModalProp {
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProp) => {
  const state = useContext(StoreContext);
  const [isModalOpen] = state.isModalOpen;

  return isModalOpen
    ? createPortal(
        <Styled.ModalBackdrop onClick={onClose}>
          <Styled.Modal onClick={(e) => e.stopPropagation()}>{children}</Styled.Modal>
        </Styled.ModalBackdrop>,
        document.body,
      )
    : null;
};
