import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import { defaultTheme } from "../styles/theme";

import { Header } from "../src/components/header/Header";
import { Main } from "../src/components/main/Main";

const Homepage = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Main />
      </ThemeProvider>
    </>
  );
};

export default Homepage;
