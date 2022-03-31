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
const mysql = require('mysql');





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
















/* mysql sorgulari*/



var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'mapleprecastltd'
  });
  
  /* con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE maplePrecastLtd", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  }); */
  
  con.connect((err) => {
    if(!err) 
    console.log('DB CONNECTION IS OKAY');
    else
    console.log('db connection is on fail ' + JSON.stringify(err, undefined, 2));
  });
  
  

  /*GET REQUESTFOR  ALL MEMBERS */ 

app.get('/posts', (req, res) => {
    con.query('SELECT * FROM posts ', (err,rows,fields) =>{
        if(!err)
        console.log(rows);
        else
        console.log(err);
    })
})


/*GET REQUESTFOR A MEMBER 

app.get('/posts/:id', (req, res) => {
    con.query('SELECT * FROM posts ', (err,rows,fields) =>{
        if(!err)
        console.log(rows);
        else
        console.log(err);
    })
})

*/





app.listen(port,hostName, ()=> {
    console.log(`Server Calisiyor, http://${hostName}:${port}/`)
})
