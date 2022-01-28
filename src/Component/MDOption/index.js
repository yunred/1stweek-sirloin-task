import react, {useCallback, useState, useContext } from "react";
import { MDContext } from 'store/MDdata.js';
import Container from "Component/Container";
import SelectImg from 'Util/SelectImg';
import * as S from "./style";

/*
optionSetter(
    [...optionSetList, {
        optionImg: [],
        optionList: [
            {
                optionName: '',
                optionValue: [undefined, undefined, undefined, false],
                additionnal: []
            }       
        ]       
    }]
}
*/

export const MDOheader = () => {
    const context = useContext(MDContext).OptionSetData;
    const state = context.state;
    const setstate = context.setstate;
    return(
        <>
            <S.ContainerName>상품 옵션</S.ContainerName>
            <S.OptionSetAppederButton onClick={
                () => {setstate(
                    [...state,
                        {
                            optionImg: [],
                            optionList: [
                                {
                                    optionName: '',
                                    optionValue: [undefined, undefined, undefined, false],
                                    additionnal: []
                                }       
                            ]       
                        }
                    ]
                )}
                }>+ 옵션 세트 추가</S.OptionSetAppederButton>
        </>

    )
}



const MDOContent = () => {
    const context = useContext(MDContext).OptionSetData;
    const state = context.state;
    const setstate = context.setstate;

    return (state.length === 0?
        <S.DefaultScreen>
        <S.H3>옵션 세트를 추가하여 옵션을 구성해 주세요</S.H3>
        </S.DefaultScreen>:
        <S.OptionSet>
            <OptionSetThumbnail/>
        </S.OptionSet>
    )
}

const OptionSetThumbnail = () => {
    const context = useContext(MDContext).OptionSetData;
    const state = context.state;
    const setstate = context.setstate;

    return(
        <div>
            <SelectImg />
        </div>
    )
    
}

const MDOption = () => {
    const context = useContext(MDContext).OptionSetData;
    console.log(context.state);
    return(
        <Container 
            ContainerHeader = {
                <MDOheader />
            } 
            ContainerContent = {
                <MDOContent/>
            }
        />
    )
}



export default MDOption