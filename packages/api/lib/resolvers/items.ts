import { Resolvers } from '@app/__generated__/graphql'
import { gql } from 'apollo-server-express'
import { Database } from 'better-sqlite3'

export const typeDefs = gql`
  type CollectorItem {
    createdAt: String!
    id: ID!
    initialCost: Float!
    manual: String
    manufacturer: String!
    name: String!
    purchaseDate: String!
    productNumber: String
    quantity: Int!
    serialNumber: String
    updatedAt: String!
  }

  input CollectorItemInput {
    initialCost: Float
    manual: String
    manufacturer: String!
    name: String!
    purchaseDate: String
    productNumber: String
    quantity: Int!
    serialNumber: String
  }

  extend type Query {
    items: [CollectorItem!]!
  }

  extend type Mutation {
    addItem(input: [CollectorItemInput!]!): [CollectorItem!]!
    reset: [CollectorItem!]!
  }
`

const allItems = (db: Database) =>
  db
    .prepare(
      `SELECT i.*,
        i.serial_number AS "serialNumber",
        i.initial_cost AS "initialCost",
        i.purchase_date AS "purchaseDate",
        m.name as "manufacturer"
      FROM item AS i
      INNER JOIN manufacturer AS m ON i.manufacturer_id = m.id`
    )
    .all()

export const resolvers: Resolvers = {
  Query: {
    items: (_, _args, { db }) => allItems(db),
  },

  Mutation: {
    reset: (_, _args, { db }) => {
      db.prepare('DELETE FROM item').run()

      return allItems(db)
    },

    addItem: (_, { input }, { db }) => {
      const addManufacturer = db.prepare(`
        INSERT OR IGNORE INTO manufacturer (name)
        VALUES (@manufacturer)
      `)

      const insert = db.prepare(
        `INSERT INTO item
        (name, initial_cost, serial_number, product_number, manufacturer_id, purchase_date, manual)
        VALUES (@name, @initialCost, @serialNumber, @productNumber, @manufacturerId, @purchaseDate, @manual)`
      )

      const insertMany = db.transaction((items) => {
        for (const item of items) {
          addManufacturer.run(item)

          const manufacturer = db
            .prepare('SELECT id FROM manufacturer WHERE name=?')
            .get(item.manufacturer)

          insert.run({
            ...item,
            manual: item.manual && null,
            manufacturerId: manufacturer.id,
            purchaseDate: item.purchaseDate
              ? new Date(item.purchaseDate).getTime() / 1000
              : Math.floor(new Date().getTime() / 1000),
          })
        }
      })

      insertMany(input)

      return allItems(db)
    },
  },
}
