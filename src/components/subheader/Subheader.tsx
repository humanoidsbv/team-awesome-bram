import * as Styled from "./Subheader.styled";

import { Button } from "../button/Button";

interface SubheaderProp {
  buttonCallback: () => void;
  buttonLabel: string;
  subtitle: string;
  title: string;
}

export const Subheader = ({ title, subtitle, buttonLabel, buttonCallback }: SubheaderProp) => {
  return (
    <Styled.SubheaderBar>
      <Styled.Label>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
      </Styled.Label>
      <Button label={buttonLabel} icon onClick={buttonCallback} />
    </Styled.SubheaderBar>
  );
};
