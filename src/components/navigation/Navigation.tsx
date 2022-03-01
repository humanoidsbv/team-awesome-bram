import Link from "next/link";

import { useContext } from "react";

import { StoreContext } from "../../providers/storeProvider";

import * as Styled from "./Navigation.styled";

export const Navigation = () => {
  const state = useContext(StoreContext);
  const [isMenuOpen] = state.isMenuOpen;

  return (
    <Styled.Container isMenuOpen={isMenuOpen}>
      <Styled.UnorderList>
        <li>
          <Link href="/" passHref>
            <Styled.Link>Timesheets</Styled.Link>
          </Link>
        </li>
        <li>
          <Link href="/team-members.html" passHref>
            <Styled.Link>Team members</Styled.Link>
          </Link>
        </li>
        <li>
          <Link href="/project.html" passHref>
            <Styled.Link> Projects</Styled.Link>
          </Link>
        </li>
        <li>
          <Link href="/clients.html" passHref>
            <Styled.Link>Clients</Styled.Link>
          </Link>
        </li>
        <li>
          <Link href="/documents.html" passHref>
            <Styled.Link>Documents</Styled.Link>
          </Link>
        </li>
      </Styled.UnorderList>
    </Styled.Container>
  );
};
