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

    div, button {
        background-color: white;
        border: 1px solid rgba(70, 77, 82, 0.082);
        box-shadow: rgb(0 0 0 / 2%) -1px 1px 6px;
        border-radius: 12px;
    }

    input, textarea {
        background-color: rgb(245, 245, 245);
        border: 1px solid rgba(70, 77, 82, 0.082);
        box-shadow: rgb(0 0 0 / 2%) -1px 1px 6px;
        border-radius: 2px;
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