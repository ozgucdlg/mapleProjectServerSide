const mongoose = require('mongoose')

const PostSchemaItem= new mongoose.Schema({
    title:{type:"string",required:true},  
    description:{type:"string",required:true}, 
    file:{type:"string",required:true},  
    date:{type:Date,default:Date.now}

})


module.exports = mongoose.model('Prodcuts', PostSchemaItem)