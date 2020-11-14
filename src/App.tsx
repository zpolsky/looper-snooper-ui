import React, { CSSProperties } from "react";
import { Provider } from "react-redux";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Router from "./components/Router/Router";
import store from "./store";

function App() {
  const containerStyle: CSSProperties = {
    paddingTop: "8px",
  };
  return (
    <Provider store={store}>
      <NavBar />
      <div style={containerStyle}>
        <Router />
      </div>
    </Provider>
  );
}

export default App;
