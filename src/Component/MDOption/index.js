import react from "react";
import Container from "Component/Container";
import * as S from "./style"

/*
props = {
    optionSetList 옵션세트정보를 원소로 하는 배열 ( state ) = [  
        { dict 하나당 독립적인 option set의 정보를 담는다.
            optionImg : []; len === 0일경우 selecImg를, len > 0 일경우 이미지를 표시. 
            optionList : [
                {
                    optionName: ''
                    optionValue: [상품 정상가'int', 상품 판매가'int', 재고'int', 과세여부'bool']
                    addtional: [[추가 옵션명'str', 추가옵션 정상가'int']]
                }
            ]
        }
    ]
}
*/

export const MDOheader = (props) => {
    const optionSetter = props.optionSetter;
    const optionSetList = props.optionSetList;
    console.log(optionSetList, optionSetter);
    return(
        <>
            <S.ContainerName>상품 옵션</S.ContainerName>
            <S.OptionSetAppederButton onClick={
                (e)=> optionSetter([...optionSetList, {
                    optionImg: [],
                    optionList: [
                        {
                            optionName: '',
                            optionValue: [undefined, undefined, undefined, false],
                            additionnal: []
                        }
                    ]
                }])
                }>+ 옵션 세트 추가</S.OptionSetAppederButton>
        </>

    )
}

export const MDOContent = (props) => {

    return(
        <S.DefaultScreen>
            <S.H3>옵션 세트를 추가하여 옵션을 구성해 주세요</S.H3>
        </S.DefaultScreen>
    )
}

const MDOption = (props) => {
    const optionSetList = props.optionSetList;
    const optionSetter = props.optionSetter;
    return(
        <Container ContainerHeader = {<MDOheader optionSetList= {optionSetList} optionSetter={optionSetter}/>} ContainerContent = {<MDOContent/>}/>
    )
}



export default MDOption