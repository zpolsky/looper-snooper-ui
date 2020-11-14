import React, { CSSProperties, ReactElement } from "react";
import { Provider, useSelector } from "react-redux";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Router from "./components/Router/Router";
import { ChatClient } from "./services/chat";
import store from "./store";
import { RootState } from "./store/root-reducer";

const AppContainer = (): ReactElement => {
  const { user, isConnected } = useSelector((state: RootState) => state.user);

  // user previously logged in
  if (user && !isConnected) {
    ChatClient.openConnection();
  }

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

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
