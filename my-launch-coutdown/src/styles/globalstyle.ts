import { createGlobalStyle } from "styled-components";
import "../assets/"


export const CreateGlobalStyles = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        background: hsl(235, 16%, 14%);
        background: url("../../assets")
    }
`