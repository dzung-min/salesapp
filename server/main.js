const path = require("path")
const express = require("express")
const cors = require("cors")
const { Model } = require("objection")
const Knex = require("knex")
const { graphqlHTTP } = require("express-graphql")
const { makeExecutableSchema } = require("@graphql-tools/schema")
const { loadSchemaSync } = require("@graphql-tools/load")
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader")

const ENV = process.env.NODE_ENV || "development"
const PORT = process.env.PORT || 5000
const knexfile = require("../knexfile")
const dbConfig = Knex(knexfile[ENV])
Model.knex(dbConfig)
const app = express()

app.use(cors({ exposedHeaders: "Authorization" }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  "/graphql",
  graphqlHTTP({
    schema: makeExecutableSchema({
      typeDefs: loadSchemaSync(
        path.join(__dirname, "schemas", "schema.graphql"),
        { loaders: [new GraphQLFileLoader()] }
      ),
      resolvers: require("./schemas/resolvers"),
    }),
    graphiql: ENV === "development",
  })
)

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`)
})
