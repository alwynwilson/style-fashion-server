const wishlists = require('../Model/wishlistModel')

//add to wishlist
exports.addToWishlist = async (req,res)=>{
    const {id,title,price,image,description,category,rating} = req.body
    const userId = req.payload
    try{
        const existingProduct = await wishlists.findOne({id,userId})
        if(existingProduct){
            res.status(406).json("Item already in your wishlist")
        }else{
            const newProduct = new wishlists({
                id,title,price,description,category,image,rating,userId
            })
            await newProduct.save()
            res.status(200).json(newProduct)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

// get all wishlist
exports.getWishlist = async (req,res)=>{
    const userId = req.payload
    try{
        const allProduct = await wishlists.find({userId})
        res.status(200).json(allProduct)
    }catch(err){
        res.status(401).json(err)
    }
}

// remove wishlist
exports.removeWishlistItem = async (req,res)=>{
    console.log("Inside remove wishlistcontroller");
    const {pid} = req.params
    try{
        const removeItem = await wishlists.findByIdAndDelete({_id:pid})
        res.status(200).json(removeItem)
    }catch(err){
        res.status(404).json(err)
    }
}