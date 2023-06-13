import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: sans-serif;
        background-color: lightgrey;
    }
    .container {
        width: 840px;
        height: 600px;
        margin: auto;
        margin-top: 150px;
        border-radius: 1rem;
        border-bottom-right-radius: 10rem;
        background-color: white;
    }
`;


export {GlobalStyles};