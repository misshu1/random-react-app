import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
    }

    html {
        height: 100%;
        font-size: 16px;
    }

    body {
        font-family: 'Roboto', sans-serif;
        position: relative;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;

    }

    #root {
        height: 100%
    }
`;
