import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #121212;
    --blue-lt: #21a2fd;
    --blue: #1471da;
    --blue-md: #0F55A6;
    --white: #fff;
    --grey: #ccc;
    --disabled: #606d6d;
    --grey-dk: #181818;
    --grey-md: #404040;
    --grey-lt: #e4e6eb;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    line-height: 1.5;
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme === 'dark' ? 'var(--grey-md) var(--black)' : 'var(--blue-lt) var(--white)'} ;
    height: 100%;
  }

  body {
    font-size: 2rem;
    height: 100%;
  }

  #___gatsby,
  #gatsby-focus-wrapper,
  main {
    height: 100%;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
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
