import { useContext } from "react";
import { PDcontext } from "store/PDdata.js";
import * as S from './style.js'

const Topbar = () => {
    const context = useContext(PDcontext);
    console.log(context);
    return(
        <S.Bar>
            <S.Title>상품 등록</S.Title>
            <S.SaveButton>저장하기</S.SaveButton>
        </S.Bar>
    );
}

export default Topbar;