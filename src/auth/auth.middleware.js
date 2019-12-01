const jwt = require('jsonwebtoken');
const { secret } = require('../config/secret');
const { ERROR } = require('../config/constants');


module.exports = (req, res, next) => {

    const tokenBearer = req.headers.authorization
    if(!tokenBearer) {
        const { status, message } = ERROR[3]
        res.status(status).send(message)
        return false
    }
    const token = tokenBearer.split(' ')[1]
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            const { status } = ERROR[3]
            res.status(status).send({ mensagem: err.message })
        }
        req.userId = decoded.id
        return next()
    })
}