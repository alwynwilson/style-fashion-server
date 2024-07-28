const products = require('../Model/productModel')

// get all products
exports.getAllProductsController = async (req,res)=>{
    console.log("Inside getAllProductsController");
    try{
        const allProducts = await products.find()
        res.status(200).json(allProducts)
    }catch(err){
        res.status(401).json (err)
    }
}

// view product
exports.getAProductController = async (req,res)=>{
    console.log("Inside getAProductsController");
    const {id} = req.params
    console.log(id);
    try{
        const singleProducts = await products.findOne({id})
        res.status(200).json(singleProducts)
    }catch(err){
        res.status(401).json (err)
    }
}
