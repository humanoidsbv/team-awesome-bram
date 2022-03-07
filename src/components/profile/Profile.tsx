import * as Styled from "./Profile.styled";

import CompanyLogo from "../../../public/images/humanoids_logo.svg";

interface AvatarProps {
  userPictureSrc: string;
}

export const Profile = ({ userPictureSrc }: AvatarProps) => {
  return (
    <Styled.HeaderRight>
      <Styled.Profile>
        <CompanyLogo />
        <Styled.Avatar alt="Profile picture" src={userPictureSrc} />
      </Styled.Profile>
      <Styled.ArrowIcon />
    </Styled.HeaderRight>
  );
};
