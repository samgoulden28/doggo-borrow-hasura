import React, { useState } from "react";
import { Button } from "react-bootstrap";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import LandingAppBar from "./LandingAppBar";
import { useAuth0 } from "./react-auth0-spa";
import headerImg from "../public/landing_page_background.png";
import cornerPaws from "../public/corner_paws.png";
import cornerPaws2 from "../public/corner_paws2.png";
import dog from "../public/dog 1.png";

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100vh",
    color: theme.palette.common.white,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
  copyBackgroundImage: {
    height: "360px",
    color: theme.palette.common.white,
    marginLeft: "15%",
    background: "#FFC62F",
    position: "relative",
    display: "flex",
    alignItems: "center",
    color: "black",
    paddingLeft: theme.spacing(3),
  },
  copyBackgroundImage2: {
    height: "360px",
    color: theme.palette.common.white,
    marginRight: "15%",
    background: "#00E5DB",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    color: "black",
    paddingRight: theme.spacing(3),
  },
  cornerPaws: {
    position: "absolute",
    color: theme.palette.common.white,
    top: "-200px",
    left: "-200px",
  },
  cornerPaws2: {
    position: "absolute",
    color: theme.palette.common.white,
    top: "-200px",
    right: "-200px",
  },
  text: {
    textAlign: "left",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-60%, -50%)",
    color: "black",
    fontWeight: 700,
  },
  textBody: {
    maxWidth: "360px",
    paddingLeft: "8px",
  },
  dogImgContainer: {
    position: "absolute",
    width: "auto",
    height: "auto",
    maxWidth: "33%",
    bottom: 0,
    right: 0,
    display: "flex",
  },
  dogImg: {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "block",
    height: "auto",
    width: "auto",
  },
  textContainer1: {
    maxWidth: "60%",
  },
}));

const Login = () => {
  const { loading, loginWithRedirect } = useAuth0();
  const [showAppBarBackground, setShowAppBarBackground] = useState(false);

  const handleScroll = () => {
    const scrollPosition = myRef.current?.scrollTop || 0;

    if (scrollPosition >= 10 && !showAppBarBackground) {
      // trigger animation
      setShowAppBarBackground(true);
    } else if (scrollPosition < 10 && showAppBarBackground) {
      setShowAppBarBackground(false);
    }
  };
  const classes = useStyles();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ background: "#F6E2C7" }}>
      <div
        className={classes.backgroundImage}
        style={{
          backgroundImage: `url(${headerImg})`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        <div className={classes.text}>
          <Typography variant="h1">Lend a Paw</Typography>
          <Typography className={classes.textBody} variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget elementum ex, tincidunt tincidunt felis. Morbi nec porta arcu,
            non interdum tellus.
          </Typography>
        </div>

        {/* Increase the priority of the hero background image */}
        <div className={classes.dogImgContainer}>
          <img
            className={classes.dogImg}
            src={dog}
            alt={"Landing page header"}
          />
        </div>

        <LandingAppBar
          handleLoginClick={loginWithRedirect}
          showAppBarBackground={showAppBarBackground}
        />

        <div style={{ height: "2000px" }} />
      </div>
      <Grid className={classes.copyBackgroundImage}>
        <img
          className={classes.cornerPaws}
          src={cornerPaws}
          alt={"Landing page header"}
        />
        <div className={classes.textContainer1}>
          <Typography variant="h5">
            Fusce eu urna semper, interdum lorem id, dictum erat. Etiam sed
            malesuada ipsum. Sed a molestie diam. Phasellus quis mattis tellus.
            Ut sit amet finibus dolor. Phasellus tellus nunc, condimentum vitae
            pretium in, cursus ut lacus. Quisque quis dolor quis quam dictum
            hendrerit. Sed consectetur viverra augue, id congue purus ornare
            eget.
          </Typography>
        </div>
      </Grid>
      <Grid className={classes.copyBackgroundImage2}>
        <img
          className={classes.cornerPaws2}
          src={cornerPaws2}
          alt={"Landing page header"}
        />
        <div className={classes.textContainer1}>
          <Typography variant="h5" align="right">
            Fusce eu urna semper, interdum lorem id, dictum erat. Etiam sed
            malesuada ipsum. Sed a molestie diam. Phasellus quis mattis tellus.
            Ut sit amet finibus dolor. Phasellus tellus nunc, condimentum vitae
            pretium in, cursus ut lacus. Quisque quis dolor quis quam dictum
            hendrerit. Sed consectetur viverra augue, id congue purus ornare
            eget.
          </Typography>
        </div>
      </Grid>
    </div>
    //   </Paper>
    //   <div className="overlay-content">
    //     <div className="overlay-heading">
    //       Welcome to Lend a Paw!{" "}
    //       <span role="img" aria-label="emoji-dog">
    //         🐶
    //       </span>
    //     </div>
    //     <div className="overlay-message">Please login to continue</div>
    //     <div className="overlay-action">
    //       <Button
    //         id="qsLoginBtn"
    //         variant="primary"
    //         className="btn-margin loginBtn"
    //         onClick={() => {
    //           loginWithRedirect({});
    //         }}
    //       >
    //         Log In
    //       </Button>
    //     </div>
    //   </div>
    // </Container>
  );
};

export default Login;
