import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { useState } from 'react';

const DateTimePickers = (props) => {
    const {state, setState , acitve} = props;
    const [value, setValue] = useState('');
    return(
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                inputFormat="yyyy/MM/dd hh:mm"
                value={state}
                disabled={!acitve}
                onChange={(newValue) => {
                    setState(newValue);
                }}
            />
        </LocalizationProvider>
    )


}

export default DateTimePickers