const path = require('path')
const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()
const port = 3000;
const hostName = '127.0.0.1'
const mongoose = require('mongoose');
const bodyParser = require('body-parser')


mongoose.connect('mongodb://127.0.0.1:/maplePrecastInc', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})


app.use(express.static('public'))

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

const main = require('./routes/main')
const posts = require('./routes/posts')
app.use('/', main)
app.use('/posts', posts)








var userName = document.getElementById('username')
var password =  document.getElementById('userpassword')

form.addEventListener('submit',e => {

    e.preventDefault();

    validateInputs();
});

 var validateInputs = () => {

    var usernameValue = userName.value.trim();
    var passwordValue =  password.value.trim();

    if(usernameValue === "Admin") {
        setSuccess(userName)
    }

        if(passwordValue === "12345"){
            setSuccess(password)
        }
 }






app.listen(port,hostName, ()=> {
    console.log(`Server Calisiyor, http://${hostName}:${port}/`)
})
