
import React from 'react';
import Header from "./src/components/header/Header"
import Navigation from "./src/components/Navigation/Navigation"
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from '@apollo/client/link/context';
import { Token, URL } from "./src/components/utils/token"

const httpLink = createHttpLink({
  uri: URL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: Token ? `Bearer ${Token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
export default function App() {

  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
}


