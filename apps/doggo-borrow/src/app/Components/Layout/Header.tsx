import React from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useAuth0 } from "../../Auth/react-auth0-spa";
import LogoutBtn from "../../Auth/LogoutBtn";
import { useQuery } from "@apollo/client";
import { GET_PROFILE_BY_ID } from "apps/doggo-borrow/src/app/GraphQL/queries";

const NavBar = () => {
  const { loading, user, logout } = useAuth0();
  const history = useHistory();
  const { loading: profileLoading, error, data } = useQuery(GET_PROFILE_BY_ID, {
    variables: { user_id: user.sub },
  });
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item xs={8}>
              <Button onClick={() => history.push("/")}>
                <Typography color="inherit">Lend a Paw</Typography>
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button onClick={() => history.push("/profile")}>
                {data?.profiles?.length
                  ? data?.profiles?.[0].name
                  : user.nickname}
              </Button>
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
