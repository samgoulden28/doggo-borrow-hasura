import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Card from "@material-ui/core/Card";
import {
  GET_MY_CHAT_LINES,
  UPDATE_CHAT_TEXT,
  REMOVE_CHAT_LINE,
} from "../../../GraphQL/queries";
import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() => ({
  paper: {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    backgroundColor: "#fff",
    position: "absolute",
    width: 400,
    border: "2px solid #000",
  },
  input: {
    width: "100%",
  },
}));

const ChatLineItem = ({ chat_line, setEditId }) => {
  const [removeChatLineMutation] = useMutation(REMOVE_CHAT_LINE);

  const removeChatLine = (e) => {
    e.preventDefault();
    e.stopPropagation();

    removeChatLineMutation({
      variables: { id: chat_line.id },
      optimisticResponse: true,
      update: (cache) => {
        const existingChatLines: {
          chat_lines: { id: number }[];
        } = cache.readQuery({ query: GET_MY_CHAT_LINES });

        const newChatLines = existingChatLines.chat_lines.filter(
          (t) => t.id !== chat_line.id
        );
        cache.writeQuery({
          query: GET_MY_CHAT_LINES,
          data: { chat_lines: newChatLines },
        });
      },
    });
  };
  return (
    <Card>
      <span>
        {chat_line.text} {chat_line.created_at}
      </span>
      <IconButton aria-label="delete" onClick={(e) => removeChatLine(e)}>
        <DeleteIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="delete" onClick={() => setEditId(chat_line.id)}>
        <ArrowDownwardIcon fontSize="small" />
      </IconButton>
    </Card>
  );
};

const TodoPrivateList = ({ chat_lines, setEditId }) => {
  return chat_lines.map((chat_line, index) => (
    <ChatLineItem chat_line={chat_line} setEditId={setEditId} key={index} />
  ));
};

const TodoPrivateListQuery = () => {
  const { loading, error, data } = useQuery(GET_MY_CHAT_LINES);
  const [updateChatLineMutation] = useMutation(UPDATE_CHAT_TEXT);
  const [editId, setEditId] = useState(null);
  const [todoUpdateInput, setTodoUpdateInput] = useState("");
  const handleClose = () => {
    setEditId(null);
    setTodoUpdateInput("");
  };

  const classes = useStyles();

  const updateChatLineText = (text) => {
    //TODO: Create some instant state update that is replaced when the server
    //actually updates the chat lines

    updateChatLineMutation({
      variables: { id: editId, text },
      optimisticResponse: true,
      update: (cache) => {
        const existingChatLines: {
          chat_lines: { id: number; text: string }[];
        } = cache.readQuery({ query: GET_MY_CHAT_LINES });
        const newChatLines = existingChatLines.chat_lines.map((cl) => {
          if (cl.id === editId) {
            return { ...cl, text };
          } else {
            return cl;
          }
        });
        cache.writeQuery({
          query: GET_MY_CHAT_LINES,
          data: { chat_lines: newChatLines },
        });
      },
    });
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  return (
    <>
      <TodoPrivateList chat_lines={data.chat_lines} setEditId={setEditId} />
      <Modal
        open={!!editId}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <form
            className="formInput"
            onSubmit={(e) => {
              e.preventDefault();
              updateChatLineText(todoUpdateInput);
              handleClose();
            }}
          >
            <input
              className={classes.input}
              placeholder="Enter new text for the line"
              value={todoUpdateInput}
              onChange={(e) => setTodoUpdateInput(e.target.value)}
            />
            <i className="inputMarker fa fa-angle-right" />
          </form>
        </div>
      </Modal>
    </>
  );
};

export default TodoPrivateListQuery;
