import React from "react";
import Table from "react-bootstrap/Table";

import { getName, getRoom } from "../utils";

function ResultsTable(props) {
  const data = props.data;
  const date = data.date;
  const room = data.room;
  const name = data.name;
  const startTime = data.startTime;
  const endTime = data.endTime;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th width="180">Field</th>
          <th>Selection</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Date (mm/dd/yy):</td>
          <td>{date}</td>
        </tr>
        <tr>
          <td>Room:</td>
          <td>{getRoom(props.rooms, room)}</td>
        </tr>
        <tr>
          <td>Name:</td>
          <td>{getName(props.users, name)}</td>
        </tr>
        <tr>
          <td>Start time:</td>
          <td>{startTime}</td>
        </tr>
        <tr>
          <td>End time:</td>
          <td>{endTime}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ResultsTable;
