import { createGlobalStyle } from 'styled-components';

import headerFont from '../assets/fonts/Montserrat-SemiBold.ttf';
import font from '../assets/fonts/Lato-Regular.ttf';

const Typography = createGlobalStyle`
    @font-face {
        font-family: Montserrat;
        src: url(${headerFont});
    }

    @font-face {
        font-family: Lato;
        src: url(${font});
    }

    html, body {
        font-family: Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h1, .h1,
    h2, .h2,
    h3, .h2 {
        font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: var(--black);
        font-weight: normal;
    }

    h1 {
        color: var(--white);
        font-size: clamp(2.4rem, 4vw, 4.6rem);
        text-transform: uppercase;
        letter-spacing: 0.64rem;
    }

    h2, .h2 {
        font-size: clamp(2rem, 4vw, 3.4rem);
        text-transform: uppercase;
        letter-spacing: 0.12rem;
    }

    h3, .h3 {
        font-size: clamp(1.8rem, 4vw, 2.4rem);
        text-transform: uppercase;
        letter-spacing: 0.12rem;
    }

    p {
        font-size: 1.8rem;
    }

    .btn {
        background-color: var(--blue);
        color: var(--white);
        padding: 1rem 1.4rem;
        text-transform: uppercase;
        font-size: 2rem;
        letter-spacing: 0.17rem;
        margin-top: 4rem;

        &:hover,
        &:focus {
            background-color: var(--blue-md);
        }
        &:focus {
            box-shadow: inset 0 0 0 3px var(--blue-lt);
            outline: 0;
        }
        &[aria-busy=true] {
            background-color: var(--grey);
            box-shadow: inset 0 0 0 1px var(--grey-dk);
        }
    }

    a{text-decoration:none; color:inherit; cursor:pointer;}
    button{background-color:transparent; color:inherit; border-width:0; padding:0; cursor:pointer; box-shadow: none;}
    figure{margin:0;}
    input::-moz-focus-inner {border:0; padding:0; margin:0;}
    ul, ol, dd{margin:0; padding:0; list-style:none;}
    h1, h2, h3, h4, h5, h6{margin:0; font-weight:inherit;}
    p{margin:0;}
    cite {font-style:normal;}
    fieldset{border-width:0; padding:0; margin:0;}
`;

export default Typography;