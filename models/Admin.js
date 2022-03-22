const mongoose = require('mongoose')

const PostSchemaAdmin= new mongoose.Schema({
    username:{type:"string",required:true},
    userpassword:{type:"string",required:true},    
    date:{type:Date,default:Date.now}

})


module.exports = mongoose.model('Admin', PostSchemaAdmin)