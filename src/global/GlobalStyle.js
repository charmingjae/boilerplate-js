import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
    html{
        font-size: 10px;
        width: 100%, height: 100%
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
        width: 100%, height: 100%
    }
    button{
        background-color: white;
        border: solid 1px black;
        cursor: pointer;
        border-radius: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 10px;
        padding-right: 10px;
    }
    button:hover{
        background-color: #f7f7f7;
        transition: 0.2s ease-in-out;
    }
    dl, li, menu, ol, ul {
        list-style: none;
    }

    #root{
        position: fixed;
        overflow: hidden;
        width: 100%;
    }
`;

export default GlobalStyles;
