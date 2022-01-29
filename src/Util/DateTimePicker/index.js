import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

const DateTimePickers = (props) => {
    const {state, setState , acitve, minDateTime, maxDateTime, callback} = props;
    return(
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                inputFormat="yyyy/MM/dd hh:mm"
                onError={callback}
                value={state}
                disabled={!acitve}
                onChange={(newValue) => {
                    setState(newValue);
                }}
                minDateTime={minDateTime}
                maxDateTime={maxDateTime}
            />
        </LocalizationProvider>
    )


}

export default DateTimePickers