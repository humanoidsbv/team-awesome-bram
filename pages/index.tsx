import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import { defaultTheme } from "../styles/theme";
import { TimeEntryProps } from "../src/types/Types";
import { NotFoundError } from "../src/errors/not-found-error";

import { Header } from "../src/components/header/Header";
import { PageContainer } from "../src/components/page-container/PageContainer";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";

import { retrieveTimeEntries } from "../src/services/time-entry-api";

interface bla {
  initialTimeEntries: TimeEntryProps[];
}

export const Homepage = ({ initialTimeEntries }: bla) => {
  console.log(initialTimeEntries);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <PageContainer>
          <TimeEntries {...{ initialTimeEntries }} />
        </PageContainer>
      </ThemeProvider>
    </>
  );
};

export const getServerSideProps = async () => {
  const initialTimeEntries = await retrieveTimeEntries();

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
