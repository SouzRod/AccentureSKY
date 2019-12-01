const service = require('./auth.service')

const auth = async (req, res) => {
    const { email, senha } = req.body

    try {
        const result = await service.auth(email, senha)
        res.send(result)
    } catch (error) {
        res.status(error.status).send({ mensagem: error.message })
    }
}

module.exports = { auth }