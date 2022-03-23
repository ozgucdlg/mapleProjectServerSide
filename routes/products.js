const express = require('express')
const router = express.Router()
const Products = require('../models/Products')





router.post('site/productsAdmin', (req, res) => {
    console.log(req.body)
   
       
    res.render('site/productsAdmin')
})






 module.exports= router
