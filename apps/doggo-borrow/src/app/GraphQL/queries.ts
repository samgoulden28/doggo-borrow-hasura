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
      postcode
      type
      user {
        users_dogs {
          dog {
            name
            breed
            birthday
            bio
            available
          }
        }
      }
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
      type
    }
    dogs(where: { user_id: { _eq: $user_id } }) {
      available
      bio
      birthday
      breed
      id
      name
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation(
    $id: Int!
    $name: String!
    $bio: String!
    $postcode: String!
    $type: String!
  ) {
    update_profiles_by_pk(
      pk_columns: { id: $id }
      _set: { bio: $bio, name: $name, postcode: $postcode, type: $type }
    ) {
      id
      name
      postcode
      bio
      type
    }
  }
`;

export const UPDATE_PROFILE_AND_DOG = gql`
  mutation(
    $id: Int!
    $name: String!
    $bio: String!
    $postcode: String!
    $type: String!
    $dogId: Int!
    $dogBio: String!
    $dogBirthday: date!
    $dogBreed: String!
    $dogName: String!
  ) {
    update_profiles_by_pk(
      pk_columns: { id: $id }
      _set: { bio: $bio, name: $name, postcode: $postcode, type: $type }
    ) {
      id
      name
      postcode
      bio
      type
    }
    update_dogs_by_pk(
      pk_columns: { id: $dogId }
      _set: {
        bio: $dogBio
        name: $dogName
        breed: $dogBreed
        birthday: $dogBirthday
      }
    ) {
      bio
      name
      breed
      birthday
    }
  }
`;

export const ADD_PROFILE_AND_ADD_DOG = gql`
  mutation(
    $user_id: String!
    $name: String!
    $bio: String!
    $postcode: String!
    $type: String!
    $dogBio: String!
    $dogBirthday: date!
    $dogBreed: String!
    $dogName: String!
  ) {
    insert_dogs(
      objects: {
        available: true
        bio: $dogBio
        birthday: $dogBirthday
        breed: $dogBreed
        name: $dogName
        user_id: $user_id
      }
    ) {
      affected_rows
    }
    insert_profiles(
      objects: {
        name: $name
        postcode: $postcode
        bio: $bio
        user_id: $user_id
        type: $type
      }
    ) {
      affected_rows
      returning {
        id
        name
        postcode
        bio
        type
      }
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation(
    $user_id: String!
    $name: String!
    $bio: String!
    $postcode: String!
    $type: String!
  ) {
    insert_profiles(
      objects: {
        name: $name
        postcode: $postcode
        bio: $bio
        user_id: $user_id
        type: $type
      }
    ) {
      affected_rows
      returning {
        id
        name
        postcode
        bio
        type
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
