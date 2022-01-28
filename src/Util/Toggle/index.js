import * as S from 'Util/Toggle/style.js';

const Toggle = (props) => {
    const {state, setstate} = props;
    return(
    <>
    <S.CheckBoxWrapper>
        <S.CheckBox id='checkbox' type='checkbox'/>
        <S.CheckBoxLabel htmlFor='checkbox' onClick={() => {setstate(!state)}}/>
    </S.CheckBoxWrapper>
    </>
    )
}

export default Toggle