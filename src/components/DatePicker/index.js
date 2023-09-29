import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "./DatePicker.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import dayjs from "dayjs";

function DatePicker({ setDateHandler }) {
  const [date, setDate] = useState(new Date());
  return (
    <div className="date-picker--container">
      <div className="active">Please select a date...</div>
      <DateTimePicker
        onChange={(value) => {
          console.log("value: ", { value });
          setDate(value);
          setDateHandler(
            dayjs(new Date(value.setHours(0, 0, 0, 0))).add(9, "hours")
          );
        }}
        className={"date-picker--comp"}
        value={date}
        disableClock
      />
    </div>
  );
}

export default DatePicker;
