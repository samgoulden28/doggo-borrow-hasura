import ReactDOM from "react-dom";
import React from "react";
import { Route, Router, Redirect } from "react-router-dom";
import { Auth0Provider } from "./app/Auth/react-auth0-spa";
import { AUTH_CONFIG } from "./app/Auth/auth0-variables";

import history from "./utils/history";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const mainRoutes = (
  <Router history={history}>
    <Route
      path="/"
      render={() => (
        <Auth0Provider
          domain={AUTH_CONFIG.domain}
          client_id={AUTH_CONFIG.clientId}
          redirect_uri={AUTH_CONFIG.callbackUrl}
          cacheLocation="localstorage"
          //@ts-ignore
          onRedirectCallback={onRedirectCallback}
        />
      )}
    />
  </Router>
);

ReactDOM.render(mainRoutes, document.getElementById("root"));
