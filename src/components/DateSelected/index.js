import dayjs from "dayjs";
import React from "react";
import "./DateSelected.css";

function DateSelected({ date }) {
  return (
    <div className={`date-selected--container ${date ? "date-selected" : ""}`}>
      You have selected date as{" "}
      {dayjs(date ?? new Date()).format("'DD/MM/YYYY'")}, let's select the
      timeslot!
    </div>
  );
}

export default DateSelected;
