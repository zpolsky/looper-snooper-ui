import React, { CSSProperties, ReactElement, useState } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, LinearProgress, TextField } from "@material-ui/core";
import { ChatClient } from "../../services/chat";
import { RootState } from "../../store/root-reducer";
import { login } from "../../store/features/user-slice";

export default function Login(): ReactElement {
  const dispatch = useDispatch();
  const { user, isConnected } = useSelector((state: RootState) => state.user);
  const [username, setUsername] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleLogin = () => {
    dispatch(login(username))
    setIsSubmitting(true);
    ChatClient.openConnection();
  };

  const containerStyle: CSSProperties = {
    textAlign: "center",
  };

  const usernameStyle: CSSProperties = {
    marginBottom: "8px",
  };

  return (
    <div style={containerStyle}>
      {isSubmitting && <LinearProgress />}
      <form>
        <div>
          <TextField
            required
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isSubmitting}
            style={usernameStyle}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={username.trim() === "" || isSubmitting}
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      </form>
      {user && isConnected && <Redirect to="/board" />}
    </div>
  );
}
