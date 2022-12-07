const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, ref:'user'},
    title:{type:String, require:true},
    category:{type:mongoose.Schema.Types.ObjectId, require:true, ref:'Category'},
    brand:{type:String, require:true},
    price:{type:String, require:true},
    description:{type:String, require:true},
    Image:{type:String, require:true},
    isFeature:{type:Boolean, default:false}
},
 {timestamps:true}
 )
 const Product = mongoose.model('Product', productSchema)
 module.exports = Product
