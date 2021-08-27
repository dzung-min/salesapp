const bcrypt = require("bcrypt")
const { Model } = require("objection")

class User extends Model {
  static get tableName() {
    return "users"
  }

  async $beforeInsert() {
    this.password = await bcrypt.hash(this.password, 8)
  }
  async $beforeUpdate() {
    if (this.password) this.password = await bcrypt.hash(this.password, 8)
  }
}

module.exports = User
