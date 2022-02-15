import styled from "styled-components";

export const SubHeaderBar = styled.div<{ isMenuOpen: boolean }>`
  align-items: space-between;
  background-color: white;
  border-bottom: 1px solid #e6eaee;
  display: ${({ isMenuOpen }) => (isMenuOpen ? "none" : "flex")};
  flex-direction: column;
  gap: 20px;
  height: 120px;
  justify-content: center;
  padding: 0 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpointTablet}) {
    align-items: center;
    flex-direction: row;
    height: 70px;
    justify-content: space-between;
  }
`;

export const Label = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;

  @media screen and (min-width: ${({ theme }) => theme.breakpointTablet}) {
    gap: 30px;
    justify-content: flex-start;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.greyShade700};
  flex: 1 0 auto;
  font-size: 18px;
  font-weight: 600;

  @media screen and (min-width: ${({ theme }) => theme.breakpointTablet}) {
    flex: 0 1 auto;
  }
`;

export const Counter = styled.p`
  color: ${({ theme }) => theme.colorSecondary300};
  flex: 1 0 auto;
  font-size: 14px;
  font-weight: 600;
  text-align: end;

  @media screen and (min-width: ${({ theme }) => theme.breakpointTablet}) {
    flex: 0 1 auto;
    text-align: start;
    border-left: 1px solid ${({ theme }) => theme.greyShade600};
    padding-left: 30px;
  }
`;
