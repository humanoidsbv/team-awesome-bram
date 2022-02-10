import * as Styled from "./Profile.styled";
import ArrowIcon from "../../../public/images/arrow-down.svg";
import CompanyLogo from "../../../public/images/humanoids_logo.svg";

interface AvatarProps {
  userPictureSrc: string;
}

export const Profile = ({ userPictureSrc }: AvatarProps) => {
  return (
    <Styled.HeaderRight>
      <Styled.Profile>
        <CompanyLogo />
        <Styled.Avatar src={userPictureSrc} />
      </Styled.Profile>
      <ArrowIcon fill="#fff" stroke="#fff" width="11px" />
    </Styled.HeaderRight>
  );
};
