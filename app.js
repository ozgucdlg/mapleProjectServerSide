const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()
const port = 3000;
const hostName = '127.0.0.1'
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const moment = require('moment');
const methodOverride = require('method-override')


mongoose.connect('mongodb://127.0.0.1:/maplePrecastInc', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.use(fileUpload());
app.use(express.static('public'))
app.use(methodOverride('_method'));




const hbs = exphbs.create({
    helpers:{
        generateDate:(date,format) =>{

            return moment(date).format(format);
        }
    }
}) 

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())


const main = require('./routes/main')
const posts = require('./routes/posts')
app.use('/', main)
app.use('/posts', posts)






















app.listen(port,hostName, ()=> {
    console.log(`Server Calisiyor, http://${hostName}:${port}/`)
})
