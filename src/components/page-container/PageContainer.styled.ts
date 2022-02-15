import styled from "styled-components";

export const PageContainer = styled.article`
  background-color: ${({ theme }) => theme.greyShade100};
  font-family: Proxima;
  min-height: 100vh;
  padding: ${({ theme }) => theme.pagePaddingMobile} 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpointTablet}) {
    padding: ${({ theme }) => theme.pagePaddingTablet} 10px;
  }
`;

export const Page = styled.article`
  max-width: 1080px;
  margin: 0 auto;
`;
