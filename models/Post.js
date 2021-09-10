const mongoose = require('mongoose')

const PostSchema= new mongoose.Schema({
    fullname:{type:"string",required:true},
    email:{type:"string",required:true},
    phone:{type:"string",required:true},
    subject:{type:"string",required:true},
    message:{type:"string",required:true},
    date:{type:Date,default:Date.now}

})


module.exports = mongoose.model('Post', PostSchema)