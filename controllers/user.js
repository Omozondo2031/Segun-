const User = require("../models/usermodels");
const bcrypt = require('bcryptjs')

//GET ALL USER FROM THE DATABASE
exports.getAllUser = async(req, res)=>{
    try {
        const allUser = await User.find({})
        if(allUser){
            res.status(200).json(allUser)
        }
    } catch (error) {
        console.log(error)
        throw new Error(`something wen wrong user not found`)
    }
}

//GET A USER BY ID FROM THE DATABASE
exports.getUserById = async(req, res)=>{
    try {
        const user = await User.findById(req.params.id).select('-passwordHash')
        if(user){
            res.status(200).json(user)
        }
    } catch (error) {
        console.log(error)
        throw new Error(`something wen wrong user not in DB`)
    }
}

//DELETE A USER FROM THE DATABASE
exports.deleteUser = async(req, res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(user)                   {
            res.status(200).json(`user deleted`)
        }
    } catch (error) {
        console.log(error)
        throw new Error(`something wen wrong, can not delete user`)
    }
}

//UPDATE A USER IN THE DATABASE
exports.update = async(req, res)=>{
    //SETTING UP A NEW PASSWORD TO BE UPDATED, IF THE PASSWORD WAS CHANGED BY THE USER
        let newPassword;
        newPassword = bcrypt.hashSync(req.body.password, 10)
    

 const user = await User.findByIdAndUpdate(
    req.params.id,
    {
       name:req.body.name,
       email:req.body.email,
       passwordHash: newPassword //THE NEW PASSWORD
    },

    {new:true}
 )
 if(!user){
    res.status(500).json(`can not update user`)
 }
 res.status(200).json(user)
}
