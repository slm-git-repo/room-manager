import React from "react";
import Table from "react-bootstrap/Table";

import { getName } from "../utils";

function ExistingReservations(props) {
  // get reservation from web api
  const existingRes = props.reservations;

  // get reservations that match the props
  const filteredRes = existingRes.filter(res => {
    const date = res.data;
    const dateString = new Date(date).toLocaleDateString();
    const room = res.salaID.toString();
    return dateString === props.date && room === props.roomId;
  });

  // validate props
  if (!props.roomId || !props.date || filteredRes.length === 0) {
    return null;
  }

  // for each of the elements in the array create a new row to insert in table
  const createMarkup = reservations => {
    const rows = [];
    for (let i = 0; i < reservations.length; i++) {
      const res = reservations[i];
      const name = getName(res.usuarioID.toString());

      const dateIn = new Date(res.checkIn);
      let startTimeHours = dateIn.getHours().toString();
      if (startTimeHours.length === 1) startTimeHours = `0${startTimeHours}`;
      let startTimeMins = dateIn.getMinutes().toString();
      if (startTimeMins.length === 1) startTimeMins = `0${startTimeMins}`;
      const startTime = `${startTimeHours}:${startTimeMins}`;

      const dateOut = new Date(res.checkOut);
      let endTimeHours = dateOut.getHours().toString();
      if (endTimeHours.length === 1) endTimeHours = `0${endTimeHours}`;
      let endTimeMins = dateOut.getMinutes().toString();
      if (endTimeMins.length === 1) endTimeMins = `0${endTimeMins}`;
      const endTime = `${endTimeHours}:${endTimeMins}`;

      rows.push(
        <tr key={res.reservaID}>
          <td>{name}</td>
          <td>{startTime}</td>
          <td>{endTime}</td>
        </tr>
      );
    }
    return rows;
  };

  return (
    <details>
      <summary>Existing reservations for this date and room</summary>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Start time:</th>
            <th>End time:</th>
          </tr>
        </thead>
        <tbody>{createMarkup(filteredRes)}</tbody>
      </Table>
    </details>
  );
}

export default ExistingReservations;
