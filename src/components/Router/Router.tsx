import React, { ReactElement } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import logo from "../../logo.svg";
import { Container } from "@material-ui/core";
import Board from "../Board/Board";

const HomePage = (): ReactElement => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

const Router = (): ReactElement => (
  <Container maxWidth="lg">
    <BrowserRouter>
      <Switch>
        <Route key="login" path="/login" component={Login} />
        <Route key="home" path="/home" component={HomePage} />
        <Route key="board" path="/board" component={Board} />
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </BrowserRouter>
  </Container>
);

export default Router;
