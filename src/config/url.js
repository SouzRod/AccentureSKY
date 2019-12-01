const user = require('../user/user.route')
const auth = require('../auth/auth.route')

const setURL = (app) => {
    app.use('/signup', user)
    app.use('/user', user)
    app.use('/signin', auth)
}

module.exports = {
    setURL
}