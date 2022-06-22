import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p013bi1hby01xs6xq6engg/master',
  cache: new InMemoryCache()
})