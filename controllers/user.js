// CRUD

const getUserById = async (req, res) => {
  const { userId } = req.params

  const user = await User.findById(userId)

  return user
}

const getUserTokens = async (req, res) => {
  const { userId } = req.params

  const user = await User.findById(userId)

  const tokens = await Token.find({ user: userId })

  return user
}
