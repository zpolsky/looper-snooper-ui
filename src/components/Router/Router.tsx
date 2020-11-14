import React, { ReactElement } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import logo from "../../logo.svg";
import { Container } from "@material-ui/core";
import Board from "../GameBoard/GameBoard";
import { useSelector } from "react-redux";
import { RootState } from "../../store/root-reducer";

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

const Router = (): ReactElement => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <Container maxWidth="lg">
      <BrowserRouter>
        <Switch>
          <Route key="login" path="/login" component={Login} />
          {!user && (
            <Route path="/">
              <Redirect to="/login" />
            </Route>
          )}
          <Route key="home" path="/home" component={HomePage} />
          <Route key="board" path="/board" component={Board} />
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default Router;
