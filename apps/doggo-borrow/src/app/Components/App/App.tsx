import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "../Layout/Header";
import Chat from "../Chat/Chat/Chat";
import ChatInput from "../Chat/ChatInput/ChatInput";
import ChatList from "../Chat/ChatList/ChatList";
import ProfileList from "../User/Profile/ProfileList/ProfileList";
import CreateEditProfile from "../User/Profile/CreateEditProfile/CreateEditProfile";
import Profile from "../User/Profile/Profile/Profile";

const createApolloClient = (authToken) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://doggo-borrow.hasura.app/v1/graphql",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }),
    cache: new InMemoryCache(),
  });
};

const App = ({ idToken }) => {
  const client = createApolloClient(idToken);

  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <ChatList />
            </Route>
            <Route path="/chat">
              <Chat />
              <ChatInput />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route path="/profile/edit">
              <CreateEditProfile />
            </Route>
            <Route path="/profiles">
              <ProfileList />
            </Route>
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
};
export default App;
