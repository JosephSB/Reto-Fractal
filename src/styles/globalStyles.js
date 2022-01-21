import { createGlobalStyle, css } from "styled-components";
import { COLOR_4 } from "./variables";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif;
    }
    *, *::before, *::after {
        box-sizing: inherit;
    }
    
    ul, li, h1, h2, h3, p, button {
        margin: 0;
    }
    ul {
        list-style: none;
    }
    button {
        background: transparent;
        border: 0;
        outline: 0;
    }
    body {
        background: #fefefe;
        height: 100vh;
        margin: 0 auto;
        overscroll-behavior: none;
        width: 100%;
        position: relative;
    }
`;

export const Active = () => {
  return css`
    color: ${COLOR_4};
  `;
};

export const Container = () => {
  return css`
    width: 100%;
    padding: 20px;
    padding-left: 350px;
    padding-bottom: 100px;
  `;
};
