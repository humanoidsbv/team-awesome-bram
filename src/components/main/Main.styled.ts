import styled from "styled-components";

export const Article = styled.article`
  padding: calc(120px + 60px) 30px;
  font-size: 100px;
  background-color: ${({ theme }) => theme.greyShade100};
  height: 100vh;
`;
