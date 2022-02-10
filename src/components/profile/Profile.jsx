import * as Styled from "./Profile.styled.js";
import ArrowIcon from "../../../public/images/arrow-down.svg";
import CompanyLogo from "../../../public/images/humanoids_logo.svg";

export function Profile() {
  return (
    <Styled.HeaderRight>
      <Styled.Profile>
        <CompanyLogo />
        <Styled.Avatar />
      </Styled.Profile>
      <ArrowIcon fill="#fff" stroke="#fff" width="11px" />
    </Styled.HeaderRight>
  );
}
