import Link from "next/link";

import * as Styled from "./Logo.styled";

import TeamAwesomeLogo from "../../../public/images/team-awesome-logo.svg";

export const Logo = () => {
  return (
    <Styled.Logo>
      <Link href="/" passHref>
        <TeamAwesomeLogo />
      </Link>
    </Styled.Logo>
  );
};
