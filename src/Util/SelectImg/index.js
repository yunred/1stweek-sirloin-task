import { useEffect, useRef, useState } from 'react';
import * as S from '/home/wongue/1stweek-sirloin-task/src/Util/SelectImg/style.js';

const SelectImg = (props) => {
    const imgList = props.imgList;
    const imgSetter = props.imgSetter;
    const imgInput = useRef();

    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <S.Button onClick={()=>imgInput.current.click()}>+ 이미지 첨부</S.Button>
            <S.Input type={'file'} accept='image/*' onChange={(e) => imgSetter([...imgList, e.target.files[0]])} ref={imgInput}></S.Input>
        </form>
    )

} 

export default SelectImg