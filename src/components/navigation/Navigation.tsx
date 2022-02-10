import { ReactElement } from "react";
import * as Styled from "./Navigation.styled";

interface NavigationProps {
  isMenuOpen: boolean;
}

export const Navigation = ({ isMenuOpen }: NavigationProps) => {
  return (
    <Styled.Container isMenuOpen={isMenuOpen}>
      <Styled.UnorderList>
        <li>
          <Styled.Link href="/">Timesheets</Styled.Link>
        </li>
        <li>
          <Styled.Link href="team-members.html">Team members</Styled.Link>
        </li>
        <li>
          <Styled.Link href="project.html">Projects</Styled.Link>
        </li>
        <li>
          <Styled.Link href="clients.html">Clients</Styled.Link>
        </li>
        <li>
          <Styled.Link href="documents.html">Documents</Styled.Link>
        </li>
      </Styled.UnorderList>
    </Styled.Container>
  );
};
