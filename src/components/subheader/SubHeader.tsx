import * as Styled from "./SubHeader.styled";
import { Button } from "../button/Button";

interface SubHeaderProp {
  isMenuOpen: boolean;
}

export const SubHeader = ({ isMenuOpen }: SubHeaderProp) => {
  return (
    <Styled.SubHeaderBar {...{ isMenuOpen }}>
      <Styled.Label>
        <Styled.Title>Timesheets</Styled.Title>
        <Styled.Counter>12 Entries</Styled.Counter>
      </Styled.Label>
      <Button label="New time entry" style="primary" icon={true} />
    </Styled.SubHeaderBar>
  );
};
