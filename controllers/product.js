const Product = require('../models/product')

exports.getAllProduct = async(req, res)=>{
    const productList = await Product.find({})
    if(productList){
        res.status(200).json(productList)
    }else{
        res.status(500).json(`can not fetch all products, something went wrong`)
    }
}

exports.getProductById = async(req, res)=>{
    const product = await Product.findById(req.params.id)
    if(product){
        res.status(200).json(product)
    }else{
        res.status(500).json(`no product found with that id`)
    }
}

exports.createProduct = async(req, res)=>{

    const product = await Product.create(req.body)
    if(product){
        res.status(200).json(product)
    }else{
        res.status(500).json(`something went wrong`)
    }
}

exports.deleteProduct = async(req, res)=>{
    const product = await Product.findOneAndDelete(req.params.id)
    if(product){
        res.status(200).json(`product remove`)
    }else{
        res.status(500).json(`something went wrong can not delete product`)
    }
}

exports.updateProduct = async(req, res)=>{
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name:req.body.name,
            category:req.body.category,
            price:req.body.price,
            brand:req.body.brand,
            description:req.body.description,
            image:req.body.image
        },
        {new:true}
    )
    if(product){
        res.status(200).json(product)
    }else{
        res.status(500).json(`can not update product`)
    }
}

exports.getProductByCategory = async(req, res)=>{
    const product = await Product.find({category:req.params.id})
    if(product){
        res.status(200).json(product)
    }else{
        res.status(500).json(`product by category not found`)
    }
}