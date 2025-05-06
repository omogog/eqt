import express from "express"
import { ApolloServer } from "apollo-server-express"
import { typeDefs } from "./interfaces/graphql/schema"
import { resolvers } from "./interfaces/graphql/resolvers"

async function startServer() {
  const app = express()
  const server = new ApolloServer({ typeDefs, resolvers })
  await server.start()
  server.applyMiddleware({ app })

  app.listen({ port: 4000 })
}

startServer()