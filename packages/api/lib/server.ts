import { db } from '@app/adapters/db'
import {
  resolvers as itemResolvers,
  typeDefs as itemTypeDefs,
} from '@app/resolvers/items'
import { CollectorContext } from '@app/types'
import { ApolloServer, gql, IResolvers } from 'apollo-server-express'
import express from 'express'
import merge from 'lodash.merge'
import { Resolvers } from './__generated__/graphql'

const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`

const server = new ApolloServer({
  typeDefs: [typeDefs, itemTypeDefs],
  resolvers: merge(itemResolvers) as IResolvers<Resolvers, CollectorContext>,
  context: () => ({
    db: db,
  }),
})

const app = express()

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
