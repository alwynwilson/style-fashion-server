const express = require('express')
const productController = require('../Controller/productController')
const userController = require('../Controller/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const wishlistController = require('../Controller/wishlistController')
const cartController = require('../Controller/cartController')

const router = new express.Router()

// get all products
router.get('/all-products',productController.getAllProductsController)

//view a product
router.get('/:id/view-product',productController.getAProductController)

//register
router.post('/register',userController.registerController)

//login
router.post('/login',userController.loginController)

//add to wishlist
router.post('/addToWishlist',jwtMiddleware,wishlistController.addToWishlist)

//get all wishlist item
router.get('/get-wishlist',jwtMiddleware,wishlistController.getWishlist)

//get all wishlist item
router.get('/wishlist/:id/remove',jwtMiddleware,wishlistController.removeWishlistItem)

//add to cart
router.post('/addToCart',jwtMiddleware,cartController.addToCart)

//get cart
router.get('/get-cart',jwtMiddleware,cartController.getCart)

//remove cartItem 
router.delete('/cart/:id/remove',jwtMiddleware,cartController.removeCartItems)

module.exports = router