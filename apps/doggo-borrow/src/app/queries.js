import { gql } from '@apollo/client';

export const ADD_TODO = gql`
  mutation($todo: String!, $isPublic: Boolean!) {
    insert_todos(objects: { title: $todo, is_public: $isPublic }) {
      affected_rows
      returning {
        id
        title
        created_at
        is_completed
      }
    }
  }
`;

export const GET_MY_TODOS = gql`
  query GetMyToDos {
    todos {
      id
      title
      is_completed
    }
  }
`;
