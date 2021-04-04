import clsx from "clsx";
import React from "react";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import NavLogo from "./nav_logo";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "fixed",
    height: "80px",
    zIndex: 100,
    "@media (max-width:600px)": {
      justifyContent: "space-around",
    },
    WebkitTransition: "background-color 0.5s",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(6),
  },
  appBarAfterScroll: {
    background: "#fff",
  },
  signInButtonContainer: {
    textAlign: "right",
  },
  signInButton: {
    color: theme.palette.common.white,
    borderRadius: "99px",
    WebkitTransition: "background-color 0.5s",
    width: "100px",
    backgroundColor: "#A242BE",
    "&:hover": {
      backgroundColor: "#7d3392",
    },
  },
  signInButtonAfterScroll: {
    backgroundColor: "#4D49FF",
    "&:hover": {
      backgroundColor: "#1d1aff",
    },
  },
  logoImage: {
    paddingTop: theme.spacing(1),
    position: "absolute",
  },
}));

export default function LandingAppBar(props) {
  const classes = useStyles();

  const { handleLoginClick, showAppBarBackground } = props;

  const appBarClasses = clsx({
    [classes.appBar]: true,
    [classes.appBarAfterScroll]: showAppBarBackground,
  });
  const signInButtonClasses = clsx({
    [classes.signInButton]: true,
    [classes.signInButtonAfterScroll]: showAppBarBackground,
  });

  return (
    <Grid
      container
      className={appBarClasses}
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid container alignItems="center" item xs={5} sm={1}>
        <Grid item xs={12} className={classes.logoImage}>
          <Fade in={!showAppBarBackground} timeout={500}>
            <div>
              <NavLogo type="light" />
            </div>
          </Fade>
        </Grid>
        <Grid item xs={12} className={classes.logoImage}>
          <Fade in={showAppBarBackground} timeout={500}>
            <div>
              <NavLogo type="dark" />
            </div>
          </Fade>
        </Grid>
      </Grid>
      <Grid item xs={5} sm={1} className={classes.signInButtonContainer}>
        <Button
          onClick={handleLoginClick}
          className={signInButtonClasses}
          data-testid="login-app-bar-sign-in-button"
        >
          Sign Up
        </Button>
      </Grid>
    </Grid>
  );
}
