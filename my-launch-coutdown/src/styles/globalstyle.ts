import { createGlobalStyle } from "styled-components";


export const CreateGlobalStyles = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Red Hat Text', sans-serif;
    }


    body{
        background:  hsl(235, 16%, 14%);
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
}
`