import { ThemeProvider } from "styled-components";

import { StoreProvider } from "../src/providers";

import GlobalStyle from "../styles/global";
import { defaultTheme } from "../styles/theme";
import { initialTimeEntriesProps } from "../src/types/Types";
import { NotFoundError } from "../src/errors/not-found-error";

import { Header } from "../src/components/header/Header";
import { PageContainer } from "../src/components/page-container";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";

import { getTimeEntries } from "../src/services/time-entry-api";

export const Homepage = ({ initialTimeEntries }: initialTimeEntriesProps) => {
  return (
    <StoreProvider>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <PageContainer>
          <TimeEntries {...{ initialTimeEntries }} />
        </PageContainer>
      </ThemeProvider>
    </StoreProvider>
  );
};

export const getServerSideProps = async () => {
  const initialTimeEntries = await getTimeEntries();

  if (initialTimeEntries instanceof NotFoundError) {
    console.log("404: Not found!");
    return;
  }

  return {
    props: {
      initialTimeEntries,
    },
  };
};

export default Homepage;
