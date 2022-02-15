import Link from "next/link";

import * as Styled from "./Logo.styled";

import TeamAwesomeLogo from "../../../public/images/team-awesome-logo.svg";

export const Logo = () => {
  return (
    <Styled.LogoText>
      <Link href="/">
        <a>
          <TeamAwesomeLogo />
        </a>
      </Link>
    </Styled.LogoText>
  );
};
