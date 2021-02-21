import React, { useState, Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';
import Card from '@material-ui/core/Card';
import { GET_MY_TODOS } from './queries.js';

const TodoPrivateList = ({ todos }) => {
  return todos.map((todo, index) => (
    <Card key={index}>
      {todo.title} {todo.is_completed ? 'yes' : 'no'}
    </Card>
  ));
};

const TodoPrivateListQuery = () => {
  const { loading, error, data } = useQuery(GET_MY_TODOS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  return <TodoPrivateList todos={data.todos} />;
};

export default TodoPrivateListQuery;
