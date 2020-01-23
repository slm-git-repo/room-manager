import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Reservation from "./Reservation";
import ConfirmationPage from "./ConfirmationPage";
import Confirmed from "./Confirmed";
import Cancelled from "./Cancelled";

function App() {
  const [data, setData] = useState("");

  const onReserve = data => {
    setData(data);
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
