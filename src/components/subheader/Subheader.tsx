import * as Styled from "./SubHeader.styled";
import { Button } from "../button/Button";

interface SubheaderProp {
  isMenuOpen: boolean;
}

export const Subheader = ({ isMenuOpen }: SubheaderProp) => {
  return (
    <Styled.SubheaderBar {...{ isMenuOpen }}>
      <Styled.Label>
        <Styled.Title>Timesheets</Styled.Title>
        <Styled.Counter>12 Entries</Styled.Counter>
      </Styled.Label>
      <Button label="New time entry" icon={true} />
    </Styled.SubheaderBar>
  );
};
