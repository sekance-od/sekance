const { StatusCodes } = require('http-status-codes')
const dataAccess = require('../data-access')

// DB

const createToken = async (req, res) => {
  const { body } = req
  try {
    await dataAccess.tokenDataAccess.createToken(body)
    res.sendStatus(StatusCodes.CREATED)
  } catch (e) {
    console.log(e)
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

const getTokens = async (req, res) => {
  const { search, size, status } = req.query
  try {
    const tokens = await dataAccess.tokenDataAccess.findToken(req.query)
    res.status(StatusCodes.OK).json(tokens)
  } catch (e) {
    console.log(e)
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

const updateToken = async (req, res) => {
  const { _id, ...data } = req.body
  try {
    await dataAccess.tokenDataAccess.findByIdAndUpdateToken(_id ? _id : req.params.id, data)
    res.sendStatus(StatusCodes.OK)
  } catch (e) {
    console.log(e)
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

const getToken = async (req, res) => {
  const { id } = req.params
  try {
    const token = await dataAccess.tokenDataAccess.findTokenById(id, 'role')
    let workingSchedule = await dataAccess.workingScheduleDataAccess.findWorkingScheduleByTokenIdOrDefault(id)
    res.status(StatusCodes.OK).json({ ...token, workingSchedule })
  } catch (e) {
    console.log(e)
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

// Smart Contract

const getTokenDetails = async (req, res) => {
  try {
    const tokenDetails = await dataAccess.tokenDataAccess.getTokenDetails()
    res.json(tokenDetails)
  } catch (error) {
    res.status(400).send('An error occured while fetching token details')
  }
}

const updateTokenPrice = async (req, res) => {
  try {
    const { price } = req.body
    const receipt = await dataAccess.tokenDataAccess.setTokenValue(price)
    res.json(receipt)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred' })
  }
}

const buyTokens = async (req, res) => {
  res.send('İşlem başarıyla tamamlandı. Transaction hash: ' + transactionReceipt.transactionHash)
}

module.exports = { createToken, getTokens, updateToken, getToken, buyTokens, getTokenDetails, updateTokenPrice }
