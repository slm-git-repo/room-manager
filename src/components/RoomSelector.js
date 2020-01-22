import React, { useState } from "react";
import Calendar from "react-calendar";
import { Button } from "react-bootstrap";

function RoomSelector() {
  const [date, setDate] = useState(new Date());

  const onCalendarChange = date => {
    setDate(date);
    console.log(date);
  };

  return (
    <>
      <div className="jumbotron">
        <h1>Room Manager</h1>
      </div>
      <Calendar onChange={onCalendarChange} value={date} />
      <Button variant="primary">Primary</Button>
    </>
  );
}

export default RoomSelector;
