import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useAuth0 } from "../../Auth/react-auth0-spa";
import LogoutBtn from "../../Auth/LogoutBtn";

const NavBar = () => {
  const { loading, user, logout } = useAuth0();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item xs={8}>
              <Typography color="inherit">Lend a Paw</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography align="right" color="inherit">
                {user.nickname}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <LogoutBtn
                logoutHandler={() =>
                  logout({ returnTo: "http://localhost:4200" })
                }
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
