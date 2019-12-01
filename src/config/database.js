const mongoose = require('mongoose')
require('dotenv').config()

let url = 'mongodb://localhost/AccentureSKY';
if( isEmptNODE_ENV() ) {
    url = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@${process.env.ATLAS_CONNECTION}/ProjetoBackend`;
} 
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useCreateIndex', true);

const db = mongoose.connection

db.on('error', console.error)
db.once('open', () => {
    console.log('Connected to Database.')
})

function isEmptNODE_ENV(){
    return process.env.NODE_ENV && process.env.NODE_ENV !== 'local';
}

module.exports = db