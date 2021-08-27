/**
 * @param {import('knex').Knex} knex
 */
exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments()
    table.string("name", 60).notNullable()
    table.string("email", 80).notNullable().unique()
    table.string("password").notNullable()
  })
}

/**
 * @param {import('knex').Knex} knex
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users")
}
