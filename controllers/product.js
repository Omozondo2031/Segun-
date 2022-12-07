const Product = require('../models/product')

exports.getAllProduct = async(req, res)=>{
    try {
        const product = await Product.find({}).populate('category')
        if(product){
            res.status(200).json(product)
        }
        
        } catch (error) {
            console.log(error)
       res.status(500).send(`product not in category`)
        }
}


exports.getProductByUserId = async(req, res)=>{
    try {
        const product = await Product.find({userId:req.params.id}).populate('category')
        if(product){
            res.status(200).json(product)
        }
        
        } catch (error) {
            console.log(error)
       res.status(500).send(`no product from this user`)
        }
}



exports.getProdutByCategory = async(req, res)=>{
    try {
        let filter = {}
        if(req.query.categories){
            filter = {category:req.query.category.split(' ')}
        }
        const product = await Product.find(filter).populate('category')
        if(product){
            res.status(200).json(product)
        }
        } catch (error) {
            console.log(error)
       res.status(500).send(`product not in category`)
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
try {
  const {title, category, price, brand, description, image} = req.body

  const product = await Product.create({
    title,
    category,
    price,
    brand,
    description,
    image
  })
    if(product){
        res.status(200).json(product)
    }
} catch (error) {
    console.log(error)
    res.status(500).json(`something went wrong can not create product`)
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


exports.getFeatureProduct = async(req, res)=>{
    try {
        const product = await Product.find({isFeature:true})
        if(product){
            res.status(200).json(product)
        }
    } catch (error) {
       console.log(error)
       res.status(500).send(`product not found`)
    }
}

