import React, { CSSProperties, ReactElement, useState } from "react";
import { Button, LinearProgress, TextField } from "@material-ui/core";
import { ChatClient } from "../../services/chat";
import { Redirect } from "react-router-dom";

export default function Login(): ReactElement {
  const [username, setUsername] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleLogin = () => {
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
      {isSubmitting && <Redirect to="/board" />}
    </div>
  );
}
