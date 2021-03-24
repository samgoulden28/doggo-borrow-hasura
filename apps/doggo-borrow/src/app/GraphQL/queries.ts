import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query MyQuery {
    users {
      name
      id
    }
  }
`;

export const GET_PROFILES = gql`
  query MyQuery {
    profiles {
      id
      name
      bio
    }
  }
`;

export const GET_PROFILE_BY_ID = gql`
  query($user_id: String!) {
    profiles(where: { user_id: { _eq: $user_id } }) {
      id
      name
      bio
      postcode
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation($id: Int!, $name: String!, $bio: String!, $postcode: String!) {
    update_profiles_by_pk(
      pk_columns: { id: $id }
      _set: { bio: $bio, name: $name, postcode: $postcode }
    ) {
      id
      name
      postcode
      bio
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation(
    $user_id: String!
    $name: String!
    $bio: String!
    $postcode: String!
  ) {
    insert_profiles(
      objects: {
        name: $name
        postcode: $postcode
        bio: $bio
        user_id: $user_id
      }
    ) {
      affected_rows
      returning {
        id
        name
        postcode
        bio
      }
    }
  }
`;

export const ADD_CHAT_LINE = gql`
  mutation($text: String!, $user_id: String!) {
    insert_chat_lines(objects: { text: $text, user_id: $user_id }) {
      affected_rows
      returning {
        id
        text
        created_at
      }
    }
  }
`;

export const GET_MY_CHAT_LINES = gql`
  query GetMyChatLines {
    chat_lines {
      id
      text
      created_at
    }
  }
`;

export const UPDATE_CHAT_TEXT = gql`
  mutation updateChatLine($id: Int!, $text: String!) {
    update_chat_lines(where: { id: { _eq: $id } }, _set: { text: $text }) {
      affected_rows
    }
  }
`;

export const REMOVE_CHAT_LINE = gql`
  mutation removeChatLine($id: Int!) {
    delete_chat_lines(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;
