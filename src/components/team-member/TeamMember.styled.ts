import styled from "styled-components";

export const TeamMember = styled.div`
  background-color: white;
  border-left: 4px solid ${({ theme }) => theme.blueShade300};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.greyShade300};
  display: flex;
  flex-direction: column;
  height: 160px;
  padding: 15px;

  @media screen and (min-width: ${({ theme }) => theme.breakpointDesktop}) {
    align-items: center;
    flex-direction: row;
    height: 80px;
    justify-content: space-between;
  }
`;

export const Profile = styled.div`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.greyShade300};
  display: flex;
  gap: 20px;
  height: 80px;
  width: 100%;
`;

export const Wrapper = styled.div<{ width: string; alignRight?: true }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${({ width }) => width};
  text-align: left;

  @media screen and (min-width: ${({ theme }) => theme.breakpointDesktop}) {
    text-align: ${({ alignRight }) => (alignRight ? "right" : "left")};
  }
`;

export const Avatar = styled.img`
  border-radius: 100%;
  height: 50px;
  margin: 2px;
  width: 50px;
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.greyShade700};
  font-size: 18px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.greyShade500};
  font-size: 14px;
`;

export const Employment = styled.div`
  display: flex;
  gap: 40px;
  height: 80px;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpointDesktop}) {
    justify-content: flex-end;
  }
`;
