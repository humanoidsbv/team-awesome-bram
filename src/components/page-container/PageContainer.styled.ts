import styled from "styled-components";

export const PageContainer = styled.article`
  background-color: ${({ theme }) => theme.greyShade100};
  font-family: ${({ theme }) => theme.fontPrimary};
  padding: ${({ theme }) => theme.pagePaddingMobile} 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpointTablet}) {
    padding: ${({ theme }) => theme.pagePaddingTablet} 10px;
  }
`;

export const Page = styled.article`
  margin: 0 auto;
  max-width: 1080px;
`;
