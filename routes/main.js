const express = require('express')
const router = express.Router()




router.get('/', (req, res) => {
    res.render('site/index')
}) 


router.get('/index', (req, res) => {
    res.render('site/index')
}) 
router.get('/about', (req, res) => {
    res.render('site/about')
})
router.get('/contact', (req, res) => {
    res.render('site/contact')
})

router.get('/products', (req, res) => {
    res.render('site/products')
})

router.get('/admin', (req, res) => {
    res.render('site/admin')
})

router.get('/login', (req, res) => {
    res.render('site/login')
})
router.get('/productsAdmin', (req, res) => {
    res.render('site/productsAdmin')
})





module.exports= router
