import React, { CSSProperties } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Router from "./components/Router/Router";

function App() {
  const containerStyle: CSSProperties = {
    paddingTop: "8px",
  };
  return (
    <>
      <NavBar />
      <div style={containerStyle}>
        <Router />
      </div>
    </>
  );
}

export default App;
