const express = require('express')
const bodyParser = require('body-parser')
// const controller = require('./controller')
const products = require('./products')
const massive = require('massive')
require('dotenv').config()

const app = express()
const {APP_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
    console.log('db is working')
    app.set('db',db)

    // db.getProducts().then(response => {
    //     console.log("products", response)
    // })

}).catch(err => {
    console.error('there was an error connecting to db', err)
})

app.use(bodyParser.json())

app.get('/api/products', products.read)

app.get('/api/products/:id', products.get)
app.post('/api/products', products.create)
app.put('/api/products/:id', products.update)
app.delete('/api/products/:id', products.delete)

app.listen(APP_PORT, () => {
    console.log('"I hate all the Orphans in the whole world"', APP_PORT);
})