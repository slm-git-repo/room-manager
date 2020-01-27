import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import Calendar from "react-calendar";
import TimePicker from "react-time-picker";

import RoomSelector from "./form/RoomSelector";
import NameSelector from "./form/NameSelector";
import ExistingReservations from "./form/ExistingReservations";
import { getErrors, isRoomTaken, getAlerts } from "./utils";

function Reservation(props) {
  const [date, setDate] = useState();
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("18:00");

  const onCalendarChange = date => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (date < yesterday) return;
    setDate(date.toLocaleDateString());
  };

  const onRoomChange = id => {
    setRoom(id);
  };

  const onNameClick = id => {
    setName(id);
  };

  const onStartTimeChange = value => {
    setStartTime(value.substring(0, 5));
  };

  const onEndTimeChange = value => {
    setEndTime(value.substring(0, 5));
  };

  const [errors, setErrors] = useState([]);

  const onButtonClick = event => {
    const errors = getErrors(name, room, date, startTime, endTime);
    const isTaken = isRoomTaken(
      props.reservations,
      room,
      date,
      startTime,
      endTime
    );

    if (isTaken) {
      setErrors("roomTaken");
      return;
    }

    if (errors.length !== 0) {
      setErrors(errors);
    } else {
      props.onReserve({
        name: name,
        room: room,
        date: date,
        startTime: startTime,
        endTime: endTime
      });
      setDate();
      setRoom("");
      setName("");
      setStartTime("09:00");
      setEndTime("18:00");
    }
  };

  return (
    <>
      <div className="jumbotron">
        <h1>Room Manager</h1>
      </div>
      <ExistingReservations
        roomId={room}
        date={date}
        reservations={props.reservations}
      />
      {getAlerts(errors)}
      <Form className="user-form">
        <div className="user-form__calendar">
          <h5>Select a date:</h5>
          <Calendar onChange={onCalendarChange} />
        </div>
        <div className="user-form__room">
          <RoomSelector onRoomChange={onRoomChange} />
        </div>
        <div className="user-form__name">
          <NameSelector onNameClick={onNameClick} />
        </div>
        <div className="break"></div>
        <div className="user-form__start-time">
          <h5>Select a start time:</h5>
          <TimePicker
            format="HH:mm"
            disableClock
            value={startTime}
            onChange={onStartTimeChange}
          />
        </div>
        <div className="user-form__end-time">
          <h5>Select an end time:</h5>
          <TimePicker
            format="HH:mm"
            disableClock
            value={endTime}
            onChange={onEndTimeChange}
          />
        </div>
        <Button className="user-form__submit" onClick={onButtonClick}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Reservation;
