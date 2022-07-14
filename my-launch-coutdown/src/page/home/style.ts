import styled from "styled-components";


export const backgroundPattern = styled.img`
    height: 100%;
    display: none;
`
export const mainB = styled.main` 
    height: 100vh;
    display: flex;
    align-items: center ;
    justify-content: center;
`
export const mainContainer = styled.div`
    height: 100%;
    h1{
        color: hsl(0, 0%, 100%);
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const block = styled.section`
        width: 100%;
        height: 25%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
`
export const card = styled.div`
    width: 130px;
    height: 130px;
    margin-left: 1rem;
    margin-bottom: 1rem;
    background: red;

`
