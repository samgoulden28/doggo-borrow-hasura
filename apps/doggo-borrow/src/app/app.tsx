import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import { useAuth0 } from './Auth/react-auth0-spa';
import Header from './Header';
import TodoInput from './TodoInput';
import TodoPrivateListQuery from './TodoList';
const createApolloClient = (authToken) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://doggo-borrow.hasura.app/v1/graphql',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }),
    cache: new InMemoryCache(),
  });
};

const App = ({ idToken }) => {
  const { loading, user, logout } = useAuth0();
  console.log(user);
  const client = createApolloClient(idToken);
  return (
    <>
      <Header />
      <ApolloProvider client={client}>
        <TodoPrivateListQuery />
        <TodoInput />
      </ApolloProvider>
      );
    </>
  );
};
export default App;
