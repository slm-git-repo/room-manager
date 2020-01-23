import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import Calendar from "react-calendar";
import TimePicker from "react-time-picker";

import "./Reservation.css";
import RoomSelector from "./form/RoomSelector";

function Reservation() {
  const [room, setRoom] = useState("");
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState("09:00:00");
  const [endTime, setEndTime] = useState("18:00:00");

  const onRoomChange = id => {
    setRoom(id);
  };

  const onCalendarChange = date => {
    setDate(date.toLocaleDateString());
  };

  const onStartTimeChange = value => {
    setStartTime(value);
  };

  const onEndTimeChange = value => {
    setEndTime(value);
  };

  const onButtonClick = event => {
    console.log({
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
        <div className="user-form__room">
          <RoomSelector onRoomChange={onRoomChange} />
          {/* <h5>Select a room:</h5>
          <div key="room-selector-radios" onChange={onRoomChange}>
            <Form.Check
              type="radio"
              name="room-selector"
              id="1"
              label="Shark"
            />
            <Form.Check
              type="radio"
              name="room-selector"
              id="2"
              label="Puffer"
            />
            <Form.Check
              type="radio"
              name="room-selector"
              id="3"
              label="Clownfish"
            />
            <Form.Check
              type="radio"
              name="room-selector"
              id="4"
              label="Bream"
            />
          </div> */}
        </div>
        <div className="user-form__calendar">
          <h5>Select a date:</h5>
          <Calendar onChange={onCalendarChange} />
        </div>
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
        <Button
          className="user-form__submit"
          variant="primary"
          onClick={onButtonClick}
        >
          Reserve room
        </Button>
      </Form>
    </>
  );
}

export default Reservation;
