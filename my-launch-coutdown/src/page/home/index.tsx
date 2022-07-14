import React from "react";
import fundo from "../../assets/pattern-hills.png"
import * as S from "./style"


export const Home = ()=>{
    return (
        <S.mainB>
            <S.mainContainer>
                <div>
                    <h1>we're launching soon</h1>
                </div>
                <S.block>
                    <S.card></S.card>
                    <S.card></S.card>
                    <S.card></S.card>
                    <S.card></S.card>

                </S.block>
            </S.mainContainer>
        </S.mainB>
    )
}
export default Home 