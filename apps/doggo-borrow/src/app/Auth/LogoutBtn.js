import React from "react";
import { Button } from "@material-ui/core";

const LogoutBtn = ({ logoutHandler }) => (
  <Button
    id="qsLogoutBtn"
    variant="secondary"
    className="btn-margin logoutBtn"
    onClick={logoutHandler}
  >
    Log Out
  </Button>
);

export default LogoutBtn;
