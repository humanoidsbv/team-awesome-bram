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
          <Link href="/" passHref>
            <Styled.Link>Timesheets</Styled.Link>
          </Link>
        </li>
        <li>
          <Link href="team-members.html" passHref>
            <Styled.Link>Team members</Styled.Link>
          </Link>
        </li>
        <li>
          <Link href="project.html" passHref>
            <Styled.Link> Projects</Styled.Link>
          </Link>
        </li>
        <li>
          <Link href="clients.html" passHref>
            <Styled.Link>Clients</Styled.Link>
          </Link>
        </li>
        <li>
          <Link href="documents.html" passHref>
            <Styled.Link>Documents</Styled.Link>
          </Link>
        </li>
      </Styled.UnorderList>
    </Styled.Container>
  );
};
