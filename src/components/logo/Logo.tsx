import Link from "next/link";
import { useRouter } from "next/router";

import * as Styled from "./Logo.styled";

import TeamAwesomeLogo from "../../../public/images/team-awesome-logo.svg";

export const Logo = () => {
  const router = useRouter();

  return (
    <Styled.Logo>
      <Link href="/" passHref>
        <TeamAwesomeLogo
          arial-label="team awesome"
          onKeyDown={(e: KeyboardEvent) => e.code === "Enter" && router.push("/")}
          role="link"
          tabIndex="0"
        />
      </Link>
    </Styled.Logo>
  );
};
