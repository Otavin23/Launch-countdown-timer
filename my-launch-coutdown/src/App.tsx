import React from "react";
import Home from "./page/home";
import { CreateGlobalStyles } from "./styles/globalstyle";

export const App = () => {
    return (
        <>
        <CreateGlobalStyles />
        <Home />
        </>
    )
}
export default App