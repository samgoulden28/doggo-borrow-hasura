// Display all chats for ID, organized by date
// Have a text box (TodoInput)
// Subscribe to all chats
// TodoInput creates a chat line for the Chat ID
import React from "react";
import { Typography, Container } from "@material-ui/core";
import { useAuth0 } from "../../../Auth/react-auth0-spa";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USERS } from "../../../GraphQL/queries";

const ChatList = () => {
  const { loading: authLoading, user, logout } = useAuth0();
  const { loading: userListLoading, error, data } = useQuery(GET_USERS);

  console.log(data, error);
  return (
    <Container>
      <Typography>Here is a list of all your chats!</Typography>
      {data?.users && data.users.map((user) => user.name)}
    </Container>
  );
};

export default ChatList;
