import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --blue-lt: #21a2fd;
    --blue: #1471da;
    --blue-md: #0F55A6;
    --white: #fff;
    --grey: #ccc;
    --disabled: #606d6d;
    --grey-dk: #414141;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    line-height: 1.5;
  }

  body {
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover,
    &:focus {
      --cast: 4px;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 6px;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--blue-lt) var(--white);
  }

  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--blue-lt);
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  img {
    max-width: 100%;
  }

  .container {
      max-width: 120rem;
      margin: 0 auto;
  }
`;

export default GlobalStyles;
