import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    body {
        height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: url("./image/mountains_5.jpg") center center / cover no-repeat;
        background-attachment: fixed;
    }

    #root {
        width: 100%;
        height: 100%;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }
`;

export default GlobalStyle;