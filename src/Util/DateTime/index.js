import React, { useState } from "react";
import DatePicker from "react-datepicker";

// const [startDate, setStartDate] = useState(new Date());
// const [endDate, setEndDate] = useState(new Date());

//   return (
//     <div>
//       <DateTimePicker
//         elected={startDate}
//         onChange={(date) => setStartDate(date)}
//         selectsStart
//         startDate={startDate}
//         endDate={endDate}
//       />
//       ~
//       <DateTimePicker
//         selected={endDate}
//         onChange={(date) => setEndDate(date)}
//         selectsEnd
//         startDate={startDate}
//         endDate={endDate}
//         // minDate={startDate}
//       />
//     </div>
//   );
// };

const DateTime = () => {
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      excludeTimes={[
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 30), 18),
        setHours(setMinutes(new Date(), 30), 19),
        setHours(setMinutes(new Date(), 30), 17),
      ]}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
};
export default DateTime;
