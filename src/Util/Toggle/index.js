import * as S from 'Util/Toggle/style.js';
import DateFnsAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const Toggle = (props) => {
    const {state, setstate} = props;
    return(
    <>
    <S.CheckBoxWrapper>
        <S.CheckBox id='checkbox' type='checkbox'/>
        <S.CheckBoxLabel htmlFor='checkbox' onClick={() => {setstate(!state)}}/>
    </S.CheckBoxWrapper>

    <LocalizationProvider dateAdapter={DateFnsAdapter}>
    <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
        setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
        <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
        </React.Fragment>
        )}
    />
    </LocalizationProvider>
    </>
    )
}

export default Toggle