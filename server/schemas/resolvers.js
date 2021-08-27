const User = require("../models/user.model")

module.exports = {
  Query: {
    user: async (_, { id }) => {
      return await User.query().findById(id)
    },
    users: async () => {
      return await User.query()
    },
  },
}
