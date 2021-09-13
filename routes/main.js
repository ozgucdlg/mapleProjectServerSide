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

router.post('/post/result', (req, res) => {
    res.redirect('/')
    console.log('test is okay')
})



module.exports= router
