import { PageMain, ContiPage } from "@page";
import { LoginPage } from "@page";
import { NavigationTemplate } from "@template/";
import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function RootRouter() {
  return (
    <Router>
      <NavigationTemplate />
      <Switch>
        <Route exact path="/" render={() => <PageMain />} />
        <Route exact path="/_conti" render={() => <ContiPage />} />
        <Route exact path="/login" render={() => <LoginPage />} />
      </Switch>
    </Router>
  );
}

export default RootRouter;
