import React, { CSSProperties, ReactElement } from "react";
import { Grid } from "@material-ui/core";

const NavBar = (): ReactElement => {
  const navStyle: CSSProperties = {
    paddingBottom: "4px",
    width: "100%",
    backgroundColor: "gray",
  };
  return (
    <div style={navStyle}>
      <Grid container>
        <Grid item lg={1} />
        <Grid item lg={4}>
          <h3>Looper Snooper</h3>
        </Grid>
      </Grid>
    </div>
  );
};

export default NavBar;
