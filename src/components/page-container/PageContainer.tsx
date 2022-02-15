import { TimeEntries } from "../time-entries";
import * as Styled from "./PageContainer.styled";

interface PageContainer {
  children: React.ReactElement;
}

export const PageContainer = ({ children }: PageContainer) => {
  return (
    <Styled.PageContainer>
      <Styled.Page>{children}</Styled.Page>
    </Styled.PageContainer>
  );
};
