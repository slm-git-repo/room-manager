import React from "react";
import Alert from "react-bootstrap/Alert";

import ResultsTable from "./results/ResultsTable";

function Confirmed(props) {
  console.log(props.data);
  // {name: 1, room: "3", date: "1/30/2020", startTime: "09:00", endTime: "18:00"}
  // to
  // {
  //   "reservaID": 1,
  //   "usuarioID": 1,
  //   "salaID": 1,
  //   "data": "2020-01-31",
  //   "horaEntrada": "2020-01-31T10:00:00",
  //   "horaSaida": "2020-01-31T11:00:00"
  // }

  return (
    <>
      <div className="jumbotron">
        <h1>Room Manager</h1>
      </div>
      <Alert variant="success">
        The room was successfully reserved! See details below.
      </Alert>
      <div className="user-results">
        <ResultsTable
          data={props.data}
          rooms={props.rooms}
          users={props.users}
        />
      </div>
    </>
  );
}

export default Confirmed;
