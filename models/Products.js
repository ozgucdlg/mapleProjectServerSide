const mongoose = require('mongoose')

const PostSchemaItem= new mongoose.Schema({
    // _id:{type:"string", required:true},
    title:{type:"string",required:true},  
    description:{type:"string",required:true}, 
    post_Image:{type:"string",required:true}, 
    post_ImageSecond:{type:"string",required:true},
    post_ImageThird:{type:"string",required:true},
    post_ImageFourth:{type:"string",required:true},

    date:{type:Date,default:Date.now}

})


module.exports = mongoose.model('prodcut', PostSchemaItem)