
import React from 'react';
import * as withAbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { Socket as PhoenixSocket } from "phoenix";
import { hasSubscription } from "@jumpn/utils-graphql";
import { split } from "apollo-link";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native"
import Navigation from "./src/components/Navigation/Navigation"
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import Cookies from "js-cookie";
import { setContext } from '@apollo/client/link/context';
import { Token, URL, WS_URL } from "./src/components/utils/token";

const phoenixSocket = new PhoenixSocket(WS_URL, {
  params: () => {
    if (Cookies.get(Token)) {
      return { token: Cookies.get(Token) };
    } else {
      return {};
    }
  }
});
const absintheSocket = withAbsintheSocket.create(phoenixSocket);
const websocketLink = createAbsintheSocketLink(absintheSocket);
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
const authedHttpLink = authLink.concat(httpLink);
const link = split(
  operation => hasSubscription(operation.query),
  websocketLink,
  authedHttpLink
);
const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});
export default function App() {

  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Navigation />
      </SafeAreaView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B6DEFD"
  }
})

