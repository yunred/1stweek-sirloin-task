import react, {useCallback, useState, useContext, useEffect } from "react";
import { PDcontext } from 'store/PDdata.js';
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

export const PDOheader = () => {
    const context = useContext(PDcontext).OptionSetData;
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



const PDOContent = () => {
    const context = useContext(PDcontext).OptionSetData;
    const state = context.state;
    const setstate = context.setstate;

    return (state.length === 0?
        <S.DefaultScreen>
        <S.H3>옵션 세트를 추가하여 옵션을 구성해 주세요</S.H3>
        </S.DefaultScreen>:
            state.map((value, index) => {
                return(//value.optionImg.length == 0?
                <S.OptionSetContainer key={index}>
                    <OptionSet index={index}/>
                </S.OptionSetContainer>
                )
            })
        
    )
}

const OptionSet = (props) => {
    const index = props.index
    const context = useContext(PDcontext).OptionSetData;
    const state = context.state;
    const setstate = context.setstate;
    return(
        <>
        <S.Buttonholder>
            <S.DelOptionSet onClick={()=>{
                const newstate = [...state];
                newstate.splice(index, 1);
                setstate(newstate);
                }}>삭제</S.DelOptionSet>
        </S.Buttonholder>
        <PDthumbnail index = {index}/>
        </>
    )
    
}

const PDthumbnail = (props) => {
    const index = props.index
    const context = useContext(PDcontext).OptionSetData;
    const state = context.state;
    const setstate = context.setstate;
    const [imgList, setImgList] = useState([]);
    useEffect(()=>{
        const newstate = [...state];
        newstate[index].optionImg = imgList;
        setstate(newstate);
    }, [imgList])

    return(state[index].optionImg.length === 0?
        <S.Imgplaceholder>
            <SelectImg imgList={imgList} imgSetter={setImgList}/>
        </S.Imgplaceholder>:
        <S.Imgholder>
            <S.OptionThumbnail src={URL.createObjectURL(state[index].optionImg[0])}/>
        </S.Imgholder>
    )
}

const PDoption = () => {
    const context = useContext(PDcontext).OptionSetData;
    console.log(context.state);
    return(
        <Container 
            ContainerHeader = {
                <PDOheader />
            } 
            ContainerContent = {
                <PDOContent/>
            }
        />
    )
}



export default PDoption