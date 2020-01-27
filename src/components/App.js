import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import "./App.css";
import Reservation from "./Reservation";
import ConfirmationPage from "./ConfirmationPage";
import Confirmed from "./Confirmed";
import Cancelled from "./Cancelled";

import { getReservations } from "../api/reservations";

function App(props) {
  const [data, setData] = useState("");
  let history = useHistory();

  const onReserve = data => {
    setData(data);
    // use day.js to see if overlpas with any reservation in reservations
    // const date = data.date;
    // const startTime = data.

    history.push("/confirm");
  };

  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getReservations().then(setReservations);
    setInterval(() => getReservations().then(setReservations), 30000);
  }, []);

  return (
    <div className="container-fluid">
      <Switch>
        <Route
          path="/"
          exact
          render={props => (
            <Reservation
              {...props}
              onReserve={onReserve}
              reservations={reservations}
            />
          )}
        />
        <Route
          path="/confirm"
          render={props => <ConfirmationPage {...props} data={data} />}
        />
        <Route
          path="/confirmed"
          render={props => <Confirmed {...props} data={data} />}
        />
        <Route path="/cancelled" component={Cancelled} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
