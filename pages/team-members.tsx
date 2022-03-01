import { ThemeProvider } from "styled-components";

import { StoreProvider } from "../src/providers";

import GlobalStyle from "../styles/global";
import { defaultTheme } from "../styles/theme";

import { NotFoundError } from "../src/errors/not-found-error";

import { Header } from "../src/components/header/Header";
import { PageContainer } from "../src/components/page-container";
import { TeamMembers } from "../src/components/team-members";

import { retrieveTeamMembers } from "../src/services/team-member-api";
import { initialTeamMembersProps } from "../src/types/Types";

export const Homepage = ({ initialTeamMembers }: initialTeamMembersProps) => {
  return (
    <StoreProvider>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <PageContainer>
          <TeamMembers {...{ initialTeamMembers }} />
        </PageContainer>
      </ThemeProvider>
    </StoreProvider>
  );
};

export const getServerSideProps = async () => {
  const initialTeamMembers = await retrieveTeamMembers();

  if (initialTeamMembers instanceof NotFoundError) {
    console.log("404: Not found!");
    return;
  }

  return {
    props: {
      initialTeamMembers,
    },
  };
};

export default Homepage;
