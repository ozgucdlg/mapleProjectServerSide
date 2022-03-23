const mongoose = require('mongoose')

const Post = require('./models/Post')
const Admin = require('./models/Admin')
const Products = require('./models/Products')


mongoose.connect('mongodb://127.0.0.1:/maplePrecastInc', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})



/* ADMIN PANEL
*/
mongoose.connect('mongodb://127.0.0.1:/maplePrecastIncAdmin', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})


/* products
*/
mongoose.connect('mongodb://127.0.0.1:/maplePrecastIncProducts', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

Products.create({
    title:'admin',
    date:'23 mart 2022',
    description:"this is test script",
    file:"lkvhaejkrhvkjehhebjhb"
   
    
}, (error,post) =>{
    console.log(error,post)

}) 






/* Post.create({
    fullname:'admin',
    email:'admin@gmail.com',
    phone: '6783451100',
    subject: 'second attemp',
    message: 'this is just for checking'
    
}, (error,post) =>{
    console.log(error,post)

}) */

/* Admin.create({
    username:'admin',
    userpassword:'admin@gmail.com',
   
    
}, (error,post) =>{
    console.log(error,post)

}) 
 */

