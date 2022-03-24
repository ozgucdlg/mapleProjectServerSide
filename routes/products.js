const express = require('express')
const router = express.Router()
const Products = require('../models/Products')

router.post('/productsAdmin', (req, res) => {    
    // res.redirect('/')
    // console.log('test is okay')
    // console.log(req.body)
    
    Products.create(req.body)
    res.render('/productsAdmin')
     
 })
 
 module.exports= router
