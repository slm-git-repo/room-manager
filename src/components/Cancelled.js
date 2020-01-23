import React from "react";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

function Cancelled(props) {
  return (
    <>
      <div className="jumbotron">
        <h1>Room Manager</h1>
      </div>
      <Alert variant="danger">The room reservation was cancelled.</Alert>
      <span>
        Click <Link to="/">here</Link> to return to the reservation form.
      </span>
    </>
  );
}

export default Cancelled;
