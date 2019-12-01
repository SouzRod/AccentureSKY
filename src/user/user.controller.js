const service = require('./user.service')

const store = async (req, res) => {
    try {
        const { id } = req.params
        const { authorization } = req.headers
        if (id) {
            res.send(await service.store(authorization, id))
        } else {
            res.send(await service.store(authorization))
        }
    } catch (error) {
        res.status(error.status).send({ mensagem: error.message })
    }
}

const save = async (req, res) => {
    try {
        const user = req.body
        const result = await service.save(user)
        res.send(result)
    } catch (error) {
        res.status(error.status).send({ mensagem: error.message })
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params
        const user = req.body
        const { authorization } = req.headers
        const result = await service.update(id, user, authorization)
        res.send(result)
    } catch (error) {
        res.status(error.status).send({ mensagem: error.message })
    }
}

module.exports = {
    store,
    save,
    update
}