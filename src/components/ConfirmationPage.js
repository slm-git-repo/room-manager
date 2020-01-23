import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import ResultsTable from "./results/ResultsTable";

function ConfirmationPage(props) {
  return (
    <>
      <div className="jumbotron">
        <h1>Room Manager</h1>
      </div>
      <Alert variant="success">
        Please confirm your information before reserving a room:
      </Alert>
      <div className="user-results">
        <ResultsTable data={props.data} />
        <Link to="/confirmed">
          <Button className="user-results__confirmed" variant="primary">
            Reserve room
          </Button>
        </Link>
        <Link to="/cancelled">
          <Button className="user-results__cancelled" variant="danger">
            Cancel
          </Button>
        </Link>
      </div>
    </>
  );
}

export default ConfirmationPage;
