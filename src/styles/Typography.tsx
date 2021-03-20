import { createGlobalStyle } from 'styled-components';

import headerFont from '../assets/fonts/Montserrat-SemiBold.ttf';
import font from '../assets/fonts/Lato-Regular.ttf';

const Typography = createGlobalStyle`
    @font-face {
        font-family: Montserrat;
        src: url(${headerFont});
        font-display: swap;
    }

    @font-face {
        font-family: Lato;
        src: url(${font});
        font-display: swap;
    }

    html, body {
        line-height: 1.5;
        font-family: Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h1, .h1,
    h2, .h2,
    h3, .h2 {
        font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        theme={theme}
        font-weight: normal;
        color: ${props => props.theme === 'dark' ? 'var(--grey-lt)' : '#111'};
    }

    h1 {
        color: var(--grey-lt);
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
        color: ${props => props.theme === 'dark' ? 'var(--grey-lt)' : '#111'};
    }

    .btn {
        background-color: ${props => props.theme === 'dark' ? 'transparent' : 'var(--blue)'};
        color: var(--white);
        border: ${props => props.theme === 'dark' ? '2px solid var(--grey-lt)' : '0'};
        padding: 1rem 1.4rem;
        text-transform: uppercase;
        font-size: 2rem;
        letter-spacing: 0.17rem;
        margin-top: 4rem;

        &:hover,
        &:focus {
            background-color: ${props => props.theme === 'dark' ? 'var(--grey-dk)' : 'var(--blue-md)'};
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

    a {
        text-decoration:none; 
        color:inherit; 
        cursor:pointer;
        padding: 4px;
        &:focus {
            box-shadow: inset 0 0 0 1px ${props => props.theme === 'dark' ? 'var(--grey-lt)' : '#111'};
            outline: 0;
        }
    }
    button{background-color:transparent; color:inherit; border-width:0; padding:0; cursor:pointer; box-shadow: none;}
    figure{margin:0;}
    input::-moz-focus-inner {border:0; padding:0; margin:0;}
    ul, ol, dd, li{margin:0; padding:0; list-style:none;}
    h1, h2, h3, h4, h5, h6{margin:0; font-weight:inherit;}
    p{margin:0;}
    cite {font-style:normal;}
    fieldset{border-width:0; padding:0; margin:0;}
`;

export default Typography;