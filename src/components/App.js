import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import RoomSelector from "./RoomSelector";
import ConfirmationPage from "./ConfirmationPage";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route path="/" exact component={RoomSelector} />
        <Route path="/confirm" component={ConfirmationPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
