import React, { useState } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import "./App.css";
import Reservation from "./Reservation";
import ConfirmationPage from "./ConfirmationPage";
import Confirmed from "./Confirmed";
import Cancelled from "./Cancelled";

function App(props) {
  const [data, setData] = useState("");
  let history = useHistory();

  const onReserve = data => {
    setData(data);
    history.push("/confirm");
  };

  return (
    <div className="container-fluid">
      <Switch>
        <Route
          path="/"
          exact
          render={props => <Reservation {...props} onReserve={onReserve} />}
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
