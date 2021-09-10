const path = require('path')
const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()
const port = 3000;
const hostName = '127.0.0.1'


app.use(express.static('public'))

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')



app.get('/', (req, res) => {
    res.render('site/index')
})

app.get('/about', (req, res) => {
    res.render('site/about')
})
app.get('/contact', (req, res) => {
    res.render('site/contact')
})

app.get('/products', (req, res) => {
    res.render('site/products')
})










app.listen(port,hostName, ()=> {
    console.log(`Server Calisiyor, http://${hostName}:${port}/`)
})
