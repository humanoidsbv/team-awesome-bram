import { ReactNode, useContext } from "react";
import { StoreContext } from "../../providers/storeProvider";

import * as Styled from "./PageContainer.styled";

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  const state = useContext(StoreContext);
  const [isMenuOpen] = state.isMenuOpen;
  const [isModalOpen] = state.isModalOpen;

  return (
    <Styled.PageContainer {...{ isMenuOpen, isModalOpen }}>
      <Styled.Page>{children}</Styled.Page>
    </Styled.PageContainer>
  );
};
