import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import { defaultTheme } from "../styles/theme";

import { Header } from "../src/components/header/Header";
import { PageContainer } from "../src/components/page-container/PageContainer";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";

const Homepage = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <PageContainer>
          <TimeEntries />
        </PageContainer>
      </ThemeProvider>
    </>
  );
};

export default Homepage;
