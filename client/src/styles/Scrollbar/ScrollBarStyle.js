import { createGlobalStyle } from "styled-components";

const ScrollBarStyle = createGlobalStyle`
    ::-webkit-scrollbar{
        width: 12px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: #d7c6b6;
        border-radius: 6px;
    }

    ::-webkit-scrollbar-track{
        background-color: white;
    }

    scrollbar-color: #d7c6b6 white;
`;

export default ScrollBarStyle;
