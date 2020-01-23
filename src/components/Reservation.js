import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

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

  // const errors = [];
  const [errors, setErrors] = useState([]);

  const onButtonClick = event => {
    // input validation here
    let errorred = false;
    if (!name) {
      errorred = true;
      setErrors([...errors, "name"]);
    }
    if (!room) {
      errorred = true;
      setErrors([...errors, "room"]);
    }
    if (!date) {
      errorred = true;
      setErrors([...errors, "date"]);
    }
    if (!startTime) {
      errorred = true;
      setErrors([...errors, "start time"]);
    }
    if (!endTime) {
      errorred = true;
      setErrors([...errors, "end time"]);
    }

    // setState(prevState => ({
    //   arrayvar: [...prevState.arrayvar, newelement]
    // }))

    // if (!name) errors.push("name");
    // if (!room) errors.push("room");
    // if (!date) errors.push("date");
    // if (!startTime) errors.push("startTime");
    // if (!endTime) errors.push("endTime");

    console.log(errors);

    if (!errorred) {
      setErrors([]);
      props.onReserve({
        name: name,
        room: room,
        date: date,
        startTime: startTime,
        endTime: endTime
      });
      // window.location.assign("/confirm");
      // this.context.router.push("/confirm");
    }
  };

  const getAlerts = () => {
    const alerts = [];
    for (let i = 0; i < errors.length; i++) {
      alerts.push(
        <Alert key={i} variant="danger">
          Please enter a valid {errors[i]}.
        </Alert>
      );
    }
    return alerts;
  };

  return (
    <>
      <div className="jumbotron">
        <h1>Room Manager</h1>
      </div>
      {/* {errors.map(name => (
        <Alert variant="danger">Please enter a valid {name}</Alert>
      ))} */}
      {getAlerts()}
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
        {/* <Link to="/confirm" onClick={onButtonClick}>
          <Button className="user-form__submit">Submit</Button>
        </Link> */}
      </Form>
    </>
  );
}

export default Reservation;
