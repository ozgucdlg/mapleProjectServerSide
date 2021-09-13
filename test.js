const mongoose = require('mongoose')

const Post = require('./models/Post')


mongoose.connect('mongodb://127.0.0.1:/maplePrecastInc', {
    useNewUrlParser:true,
    useUnifiedTopology:true
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