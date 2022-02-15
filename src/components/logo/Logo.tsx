import * as Styled from "./Logo.styled";

import TeamAwesomeLogo from "../../../public/images/team-awesome-logo.svg";

export const Logo = () => {
  return (
    <Styled.LogoText>
      <a href="/">
        <TeamAwesomeLogo />
      </a>
    </Styled.LogoText>
  );
};
