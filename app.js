import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from 'apollo-server-core';
import resolvers from './graphql/resolvers.js';
import http from 'http';
import typeDefs from './graphql/typeDefs.js';

const app = express();
const httpServer = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Hello Apollo');
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});

export { app, httpServer, server };
