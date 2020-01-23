import React from "react";
import Alert from "react-bootstrap/Alert";

import ResultsTable from "./results/ResultsTable";

function Confirmed(props) {
  return (
    <>
      <div className="jumbotron">
        <h1>Room Manager</h1>
      </div>
      <Alert variant="success">
        The room was successfully reserved! See details below.
      </Alert>
      <div className="user-results">
        <ResultsTable data={props.data} />
      </div>
    </>
  );
}

export default Confirmed;
