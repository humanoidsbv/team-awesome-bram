import styled from "styled-components";

export const HeaderRight = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpointWidth}) {
    align-items: center;
    display: flex;
    gap: 10px;
    justify-content: space-around;
  }
`;

export const Profile = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 20px;
  display: flex;
  height: 40px;
  justify-content: space-between;
  width: 150px;

  svg {
    height: 20px;
    margin: 15px;
    width: 80px;
  }
`;

export const Avatar = styled.img`
  border-radius: 100%;
  height: 36px;
  margin: 2px;
  width: 36px;
`;
