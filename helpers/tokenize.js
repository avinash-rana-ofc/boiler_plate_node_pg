const dayjs = require('dayjs')
const jwt = require('jsonwebtoken')

module.exports = {
  create: (user) => {
    const payload = {
      sub: {
        ...user.dataValues
      },
      iat: dayjs().unix(),
      exp: dayjs().add(3, 'month').endOf('month').unix()
    }
    return jwt.sign(payload, 'secret')
  },
  verify: (token) => {
    return jwt.verify(token, 'secret')
  }
}