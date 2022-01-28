import React, { useState } from "react";
import * as Style from "./style";
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// const dateFormat = dayjs(date).format("YYYY-MM-DD");

const DateTime = () => {
  const [value, setValue] = useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        value={value}
        inputFormat="yyyy/MM/dd hh:mm"
        mask="____/__/__ __:__"
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => (
          <>
            <Style.Input ref={startProps.inputRef} {...startProps.inputProps} />
            <Style.IconButton icon={faChevronDown} />
            <Box sx={{ mx: 0.1 }}> &nbsp;&nbsp;&nbsp;&nbsp; ~</Box>
            <Style.Input ref={endProps.inputRef} {...endProps.inputProps} />
            <Style.IconButton icon={faChevronDown} />
          </>
        )}
      />
    </LocalizationProvider>
  );
};

export default DateTime;
