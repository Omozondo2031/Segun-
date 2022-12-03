const Category = require("../models/category");

exports.getAllCategory = async(req, res)=>{
    const category = await Category.find({})
    if(category){
        res.status(200).json(category)
    }else{
        res.status(500).json(`something went wrong can fetch category`)
    }
}

exports.getCategoryById = async(req, res)=>{
    const category = await Category.findById(req.params.id)
        if(category){
        res.status(200).json(category)
        }else{
            res.status(500).json(`category not found`)
        }
}

exports.createCategory = async(req, res)=>{
    const category = await Category.create(req.body)
    if(category){
        res.status(200).json(category)
    }else{
        res.status(500).json(`can not create category`)
    }
}

exports.updateCategory = async(req, res)=>{
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if(category){
        res.status(200).json(category)
    }else{
        res.status(500).json(`something went wrong`)
    }
}

exports.deleteCategory = async(req, res)=>{
    const category = await Category.findOneAndDelete(req.params.id)
    if(category){
        res.status(200).json(`category deleted`)
    }
}