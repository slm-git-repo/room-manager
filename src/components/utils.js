import React from "react";
import Alert from "react-bootstrap/Alert";

import dayjs from "dayjs";

const nameOptions = [
  { id: "1", label: "Bárbara Ribeiro" },
  { id: "2", label: "Catarina Curioso" },
  { id: "3", label: "Sérgio Machado" },
  { id: "4", label: "Marcelo Mattos" }
];

const roomOptions = [
  { id: "1", label: "Shark" },
  { id: "2", label: "Puffer" },
  { id: "3", label: "Carp" },
  { id: "4", label: "Bream" }
];

const getName = id => {
  const selected = nameOptions.filter(el => el.id === id);
  if (selected[0]) return selected[0].label;
};

const getRoom = id => {
  const selected = roomOptions.filter(el => el.id === id);
  if (selected[0]) return selected[0].label;
};

const databaseTimeToUserTime = databaseTime => {
  const date = new Date(databaseTime);
  let dateHours = date.getHours().toString();
  if (dateHours.length === 1) dateHours = `0${dateHours}`;
  let dateMins = date.getMinutes().toString();
  if (dateMins.length === 1) dateMins = `0${dateMins}`;
  return `${dateHours}:${dateMins}`;
};

const getErrors = (name, room, date, startTime, endTime) => {
  let errors = [];
  if (!name) {
    errors = [...errors, "name"];
  }
  if (!room) {
    errors = [...errors, "room"];
  }
  if (!date) {
    errors = [...errors, "date"];
  }
  if (!startTime) {
    errors = [...errors, "start time"];
  }
  if (!endTime) {
    errors = [...errors, "end time"];
  }
  return errors;
};

const isRoomTaken = (reservations, room, date, startTime, endTime) => {
  // get reservations that match the date and room
  const filteredRes = reservations.filter(res => {
    const dateString = new Date(res.data).toLocaleDateString();
    const roomId = res.salaID.toString();
    return dateString === date && roomId === room;
  });

  // there are 4 overlapping possibilities
  const overlaps = filteredRes.map(res => {
    const resStartTime = getDateTime(
      new Date(res.data).toLocaleDateString(),
      databaseTimeToUserTime(res.checkIn)
    );
    const resEndTime = getDateTime(
      new Date(res.data).toLocaleDateString(),
      databaseTimeToUserTime(res.checkOut)
    );
    const thisStartTime = getDateTime(date, startTime);
    const thisEndTime = getDateTime(date, endTime);

    // 1) thisTime is inside an existing reservation
    let overlap =
      thisStartTime.isAfter(resStartTime, "minute") &&
      thisStartTime.isBefore(resEndTime, "minute");

    // 2) an existing reservation is inside thisTime
    overlap =
      overlap ||
      (thisStartTime.isBefore(resStartTime, "minute") &&
        thisEndTime.isAfter(resEndTime, "minute"));

    // 3) an existing reservation starts in the middle of thisTime
    overlap =
      overlap ||
      (thisStartTime.isBefore(resStartTime, "minute") &&
        thisEndTime.isAfter(resStartTime, "minute"));

    // 4) thisTime starts in the middle of an existing reservation
    overlap =
      overlap ||
      (resStartTime.isBefore(thisStartTime, "minute") &&
        resEndTime.isAfter(thisStartTime, "minute"));

    return overlap;
  });
  const reducer = (acc, curr) => acc || curr;
  return overlaps.reduce(reducer, false);
};

const getDateTime = (date, time) => {
  const hour = parseInt(time.substring(0, 2));
  const min = parseInt(time.substring(3, 5));
  return dayjs(date)
    .set("h", hour)
    .set("m", min);
};

const getAlerts = errors => {
  if (errors.includes("roomTaken")) {
    return (
      <Alert variant="danger">
        Selected room already reserved for the chosen time.
      </Alert>
    );
  } else {
    return errors.map(err => (
      <Alert key={err} variant="danger">
        Please enter a valid {err}.
      </Alert>
    ));
  }
};

export {
  nameOptions,
  roomOptions,
  getName,
  getRoom,
  databaseTimeToUserTime,
  getErrors,
  isRoomTaken,
  getAlerts
};
