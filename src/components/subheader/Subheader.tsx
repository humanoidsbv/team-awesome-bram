import { ReactNode } from "react";

import * as Styled from "./Subheader.styled";

import { Button } from "../button/Button";

interface SubheaderProp {
  buttonCallback: () => void;
  buttonLabel: string;
  isMenuOpen: boolean;
  modal: ReactNode;
  subtitle: string;
  title: string;
}

export const Subheader = ({
  isMenuOpen,
  title,
  subtitle,
  buttonLabel,
  buttonCallback,
  modal,
}: SubheaderProp) => {
  return (
    <Styled.SubheaderBar {...{ isMenuOpen }}>
      <Styled.Label>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
      </Styled.Label>
      <Button label={buttonLabel} icon onClick={buttonCallback} />
      {modal}
    </Styled.SubheaderBar>
  );
};
