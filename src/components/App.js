import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import "./App.css";
import Reservation from "./Reservation";
import ConfirmationPage from "./ConfirmationPage";
import Confirmed from "./Confirmed";
import Cancelled from "./Cancelled";

import { getReservations, getRooms, getUsers } from "../api/fetchData";

function App(props) {
  const [data, setData] = useState("");
  let history = useHistory();

  const onReserve = data => {
    setData(data);
    history.push("/confirm");
  };

  const [reservations, setReservations] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getReservations().then(setReservations);
    getRooms().then(setRooms);
    getUsers().then(setUsers);
    // setInterval(() => getReservations().then(setReservations), 30000);
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
              rooms={rooms}
              users={users}
            />
          )}
        />
        <Route
          path="/confirm"
          render={props => (
            <ConfirmationPage
              {...props}
              data={data}
              rooms={rooms}
              users={users}
            />
          )}
        />
        <Route
          path="/confirmed"
          render={props => (
            <Confirmed {...props} data={data} rooms={rooms} users={users} />
          )}
        />
        <Route path="/cancelled" component={Cancelled} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
