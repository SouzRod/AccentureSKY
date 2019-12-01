var app = require('./config/app')
const urls = require('./config/url')
require('dotenv').config()
require('./config/database')

const port = process.env.PORT || 3001

urls.setURL(app)

app.listen(port, (err) => {
    if (err){
        console.log('error: ' + err)
    } else {
        console.log(`Server running on port: ${port}`)
    }
})
