import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
    outline: none;
    user-select: none;
  }

  h1, h2, h3, h4, h5, h6, p, body {
    margin: 0;
    padding: 0;
  }

  input, button, select {
    border: none;
  }

  input {
    font: 400 1.6rem 'Lato';
  }

  #root {
    font-family: 'Lato', sans-serif;
    font: 400 1.6rem 'Lato';

    -webkit-font-smoothing: antialiased;
  }

  button, a {
    cursor: pointer;
  }
`;
