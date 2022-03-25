const mongoose = require('mongoose')

const Post = require('./models/Post')
const Admin = require('./models/Admin')
const Products = require('./models/Products')


/* POST page */

mongoose.connect('mongodb://127.0.0.1:/maplePrecastInc', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})


/* Post.find({}, (error,post)=>{
    console.log(error,post)
}) */



/* Post.create({
    fullname:'admin',
    email:'admin@gmail.com',
    phone: '6783451100',
    subject: 'second attemp',
    message: 'this is just for checking'
    
}, (error,post) =>{
    console.log(error,post)

}) */


/*-------------------------------------------------------------------------------------------*/

/* ADMIN PANEL PAGE
*/
mongoose.connect('mongodb://127.0.0.1:/maplePrecastIncAdmin', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})



/* Admin.create({
    username:'admin',
    userpassword:'admin@gmail.com',
   
    
}, (error,post) =>{
    console.log(error,post)

}) 
 */


/*----------------------------------------------------------------------------------------------*/

/* PRODUCTS PAGE
*/
mongoose.connect('mongodb://127.0.0.1:/maplePrecastIncProducts', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
/*                                 CREATE ISLEMI                    */


/*
Products.create({
    title:'admin',
    date:'23 mart 2022',
    description:"this is test script",
    file:"lkvhaejkrhvkjehhebjhb"
   
    
}, (error,Products) =>{
    console.log(error,Products)

}); */




/*                                 UPDATE ISLEMI                    */
 /* Products.findByIdAndUpdate('623b3311b94e91da6be000ee',{
    title:'oguchi',    
    date:'19 mayis 1919',
    file:'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    description:'oguchis story',    
   
}, (error,Products) =>{
    console.log(error,Products)
}) */

/*                                 DELETE ISLEMI                    */

 Products.findByIdAndDelete('623b3311b94e91da6be000ee',{
    title:'oguchi',    
    date:'19 mayis 1919',
    file:'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    description:'oguchis story',    
   
}, (error,Products) =>{
    console.log(error,Products)
}) 

/*                                 READ ISLEMI ISLEMI                    */

/*  Products.find({},{
    title:'oguchi',    
    date:'19 mayis 1919',
    file:'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    description:'oguchis story',    
   
}, (error,Products) =>{
    console.log(error,Products)
}) */
  


