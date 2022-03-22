const express = require('express')
const router = express.Router()
const Post = require('../models/Post')







router.post('/test', (req, res) => {    
    // res.redirect('/')
    // console.log('test is okay')
    // console.log(req.body)
    
    Post.create(req.body)
    res.redirect('/')
     
 })
 

module.exports= router
