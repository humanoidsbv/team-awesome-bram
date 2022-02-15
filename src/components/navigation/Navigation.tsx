import Link from "next/link";

import * as Styled from "./Navigation.styled";

interface NavigationProps {
  isMenuOpen: boolean;
}

export const Navigation = ({ isMenuOpen }: NavigationProps) => {
  return (
    <Styled.Container isMenuOpen={isMenuOpen}>
      <Styled.UnorderList>
        <li>
          <Link href="/">
            <Styled.Link>Timesheets</Styled.Link>
          </Link>
        </li>
        <li>
          <Link href="team-members.html">
            <Styled.Link>Team members</Styled.Link>
          </Link>
        </li>
        <li>
          <Link href="project.html">
            <Styled.Link> Projects</Styled.Link>
          </Link>
        </li>
        <li>
          <Link href="clients.html">
            <Styled.Link>Clients</Styled.Link>
          </Link>
        </li>
        <li>
          <Link href="documents.html">
            <Styled.Link>Documents</Styled.Link>
          </Link>
        </li>
      </Styled.UnorderList>
    </Styled.Container>
  );
};
