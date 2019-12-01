const router = require('express').Router()

const controllerUser = require('./user.controller')
const authMiddleware = require('../auth/auth.middleware')

router.get('/', authMiddleware, controllerUser.store)
router.get('/:id', authMiddleware, controllerUser.store)
router.put('/:id', authMiddleware, controllerUser.update)

router.post('/', controllerUser.save)

module.exports =  router