const bcrypt = require("bcrypt")

/**
 * @param {import('knex').Knex} knex
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del()
  // Inserts seed entries
  await knex("users").insert([
    {
      name: "John Doe",
      email: "john.doe@outlook.com",
      password: await bcrypt.hash("johndoe8888", 8),
    },
    {
      name: "Marry Jane",
      email: "marry@gmail.com",
      password: await bcrypt.hash("marryjane", 8),
    },
    {
      name: "Tom Hank",
      email: "tom.hank@yahoo.com",
      password: await bcrypt.hash("forestgump", 8),
    },
  ])
}
