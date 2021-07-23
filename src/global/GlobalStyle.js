import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
    html{
        font-size: 10px;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
        font-size:2rem;
        font-family: 'Do Hyeon', 'Noto Sans KR', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body{
        margin: 0;
        // padding-top: 50px;
        font-size:2rem;
        font-family: 'Do Hyeon', 'Noto Sans KR', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        // word-break: keep-all;
        // word-wrap: break-word;
    }
    button{
        background-color: white;
        border: solid 2px black;
    }
    dl, li, menu, ol, ul {
        list-style: none;
    }
`;

export default GlobalStyles;
