import Link from "next/link";
import { useRouter } from "next/router";

import { useContext } from "react";

import { StoreContext } from "../../providers/storeProvider";

import * as Styled from "./Navigation.styled";

export const Navigation = () => {
  const state = useContext(StoreContext);
  const [isMenuOpen, setIsMenuOpen] = state.isMenuOpen;

  const router = useRouter();

  return (
    <Styled.Container
      isMenuOpen={isMenuOpen}
      onClick={(event) => event.target instanceof HTMLAnchorElement && setIsMenuOpen(false)}
    >
      <Styled.UnorderList>
        <li>
          <Link href="/" passHref>
            <Styled.Link pathName="/" currentPathName={router.pathname}>
              Timesheets
            </Styled.Link>
          </Link>
        </li>
        <li>
          <Link href="/team-members" passHref>
            <Styled.Link pathName="/team-members" currentPathName={router.pathname}>
              Team members
            </Styled.Link>
          </Link>
        </li>
        <li>
          <Link href="/projec" passHref>
            <Styled.Link pathName="/project" currentPathName={router.pathname}>
              {" "}
              Projects
            </Styled.Link>
          </Link>
        </li>
        <li>
          <Link href="/clients" passHref>
            <Styled.Link pathName="/clients" currentPathName={router.pathname}>
              Clients
            </Styled.Link>
          </Link>
        </li>
        <li>
          <Link href="/documents" passHref>
            <Styled.Link pathName="/documents" currentPathName={router.pathname}>
              Documents
            </Styled.Link>
          </Link>
        </li>
      </Styled.UnorderList>
    </Styled.Container>
  );
};
