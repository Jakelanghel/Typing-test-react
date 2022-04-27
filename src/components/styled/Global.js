import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    h1,
    h2,
    h2,
    p {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${({theme}) => theme.black};
        color: ${({theme}) => theme.white};

    }


`;