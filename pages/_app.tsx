import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import client from "../apollo-client";
import { StoreProvider } from "../src/providers";

import GlobalStyle from "../styles/global";
import { defaultTheme } from "../styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </StoreProvider>
    </ApolloProvider>
  );
};
export default App;
