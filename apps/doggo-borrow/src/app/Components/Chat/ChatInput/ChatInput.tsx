import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CHAT_LINE, GET_MY_CHAT_LINES } from "../../../GraphQL/queries";
import { useAuth0 } from "../../../Auth/react-auth0-spa";

const TodoInput = ({ isPublic = false }) => {
  const { user, loading } = useAuth0();
  if (loading) {
    return <div>Loading</div>;
  }

  const [todoInput, setTodoInput] = useState("");

  const resetInput = () => {
    setTodoInput("");
  };

  const updateCache = (cache, { data }) => {
    // If this is for the public feed, do nothing
    if (isPublic) {
      return null;
    }
    // Fetch the todos from the cache
    const existingChatLines = cache.readQuery({
      query: GET_MY_CHAT_LINES,
    });
    // Add the new todo to the cache
    const newChatLine = data.insert_chat_lines.returning[0];
    console.log(newChatLine);

    cache.writeQuery({
      query: GET_MY_CHAT_LINES,
      data: { chat_lines: [...existingChatLines.chat_lines, newChatLine] },
    });
  };

  const [addChatLine] = useMutation(ADD_CHAT_LINE, {
    update: updateCache,
    onCompleted: resetInput,
  });

  return (
    <form
      className="formInput"
      onSubmit={(e) => {
        e.preventDefault();
        addChatLine({ variables: { text: todoInput, user_id: user.sub } });
      }}
    >
      <input
        className="input"
        placeholder="What needs to be done?"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <i className="inputMarker fa fa-angle-right" />
    </form>
  );
};

export default TodoInput;
