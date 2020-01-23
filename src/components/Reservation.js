import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import Calendar from "react-calendar";
import TimePicker from "react-time-picker";

import RoomSelector from "./form/RoomSelector";
import NameSelector from "./form/NameSelector";

function Reservation(props) {
  const [date, setDate] = useState();
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("09:00:00");
  const [endTime, setEndTime] = useState("18:00:00");

  const onCalendarChange = date => {
    setDate(date.toLocaleDateString());
  };

  const onRoomChange = id => {
    setRoom(id);
  };

  const onNameClick = id => {
    setName(id);
  };

  const onStartTimeChange = value => {
    setStartTime(value);
  };

  const onEndTimeChange = value => {
    setEndTime(value);
  };

  const onButtonClick = event => {
    props.onReserve({
      name: name,
      room: room,
      date: date,
      startTime: startTime,
      endTime: endTime
    });
  };

  return (
    <>
      <div className="jumbotron">
        <h1>Room Manager</h1>
      </div>
      <Form className="user-form">
        <div className="user-form__calendar">
          <h5>Select a date:</h5>
          <Calendar onChange={onCalendarChange} />
        </div>
        <div className="user-form__room">
          <RoomSelector onRoomChange={onRoomChange} />
        </div>
        <NameSelector onNameClick={onNameClick} />
        <div className="break"></div>
        <div className="user-form__start-time">
          <h5>Select a start time:</h5>
          <TimePicker
            format="HH:mm:ss"
            disableClock
            value={startTime}
            onChange={onStartTimeChange}
          />
        </div>
        <div className="user-form__end-time">
          <h5>Select an end time:</h5>
          <TimePicker
            format="HH:mm:ss"
            disableClock
            value={endTime}
            onChange={onEndTimeChange}
          />
        </div>
        <Link to="/confirm" onClick={onButtonClick}>
          <Button className="user-form__submit">Submit</Button>
        </Link>
      </Form>
    </>
  );
}

export default Reservation;
