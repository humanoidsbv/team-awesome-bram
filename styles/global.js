import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --min-width: 1024px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    @font-face {
        font-family: Bello;
        src: url("fonts/bello-script.ttf") format('truetype');
    }

    @font-face {
        font-family: Proxima;
        src: url("fonts/proxima-nova-regular.ttf") format('truetype');
    }
  }
`;

export default GlobalStyle;