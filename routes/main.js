const path= require('path')
const express = require('express')
const router = express.Router()
const Product = require('../models/Products')




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

        Product.find({}).then(prodcuts => {
            res.render('site/products', {
                prodcuts:prodcuts.map(product=> product.toJSON())});
        })    
   
       
    
    
})

router.get('/admin', (req, res) => {
    
    res.render('site/admin');
   
})
router.get('/login', (req, res) => {
    
    res.render('site/login')
})


/*----------------------------------------------------- ADMIN PANELI  CRUD APPLICATIONLARI---------------------------------------------- */
 

/* routing to post yukleme sayfasi */
router.get('/addNewItemPage', (req, res) => {
    res.render('site/addNewItemPage')
})



/* ilk yazilan gidecegi yer ikincisi ise sitenin icinde calitiracagi component ururn ekleme */
router.get('/productsAdmin', (req, res) => {    
   
    Product.find({}).then(prodcuts => {
        res.render('site/productsAdmin', {
           prodcuts:prodcuts.map(product=> product.toJSON()) });
    })  
})

/* coklu fotograf ekleme */
router.post('/productsAdmin', (req, res) => {     

    let post_Image = req.files.post_Image
    let post_ImageSecond = req.files.post_ImageSecond
    let post_ImageThird = req.files.post_ImageThird
    let post_ImageFourth = req.files.post_ImageFourth

    
    post_Image.mv(path.resolve(__dirname, '../public/img/postimages', post_Image.name))
    post_ImageSecond.mv(path.resolve(__dirname, '../public/img/postimages', post_ImageSecond.name)) 
    post_ImageThird.mv(path.resolve(__dirname, '../public/img/postimages', post_ImageThird.name)) 
    post_ImageFourth.mv(path.resolve(__dirname, '../public/img/postimages', post_ImageFourth.name)) 

    Product.create({
        ...req.body, 
        post_Image:`/img/postimages/${post_Image.name}`,
        post_ImageSecond:`/img/postimages/${post_ImageSecond.name}`,
        post_ImageThird:`/img/postimages/${post_ImageThird.name}`,
        post_ImageFourth:`/img/postimages/${post_ImageFourth.name}`,
 

    }) 
    console.log(req.body)
    console.log(req.files.post_Image)
    res.redirect('/productsAdmin')    
    
})


/* delete islemi */
router.delete('/productsAdmin/:id', (req, res) => {
    Product.findByIdAndDelete({id:req.params.id}).then(() => {
        res.redirect('/productsAdmin')        
    })
}) 

router.delete('/products/:id', (req, res) => {
    Product.findByIdAndDelete({id:req.params.id}).then(() => {
        console.log(req.body)
        res.redirect('/product')        
    })
}) 
 




module.exports= router
