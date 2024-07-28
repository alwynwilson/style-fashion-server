const cartItems = require('../Model/cartModel')


//add to cart
exports.addToCart = async (req,res)=>{
    const {id,title,image,price,quantity} = req.body
    const userId = req.payload
    try{
        const existingProduct = await cartItems.findOne({id,userId})
        if(existingProduct){
            existingProduct.quantity += 1
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            await existingProduct.save()
            res.status(200).json("Items added to your cart")
        }else{
            const newProduct = new cartItems({
                id,title,price,image,quantity,totalPrice,userId
            })
            await newProduct.save()
            res.status(200).json("Item added to your cart")
        }
    }catch(err){
        res.status(401).json(err)
    }
}


//get cart
exports.getCart = async (req,res)=>{
    const userId = req.payload
    try{
        const allProducts = await cartItems.find({userId})
        res.status(200).json(allProducts)
    }catch(err){
        res.status(401).json(err)
    }
}


//remove cart
exports.removeCartItems = async (req,res)=>{
    const {id} = req.params
    try{
        const removeItem = await cartItems.findByIdAndDelete({_id:id})
        res.status(200).json(removeItem)
    }catch(err){
        res.status(401).json(err)
    }
}
//empty cart
//increment cart
// decrement cart qty