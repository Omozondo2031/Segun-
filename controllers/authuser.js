const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/usermodels')

//REGISTER NEW USER
exports.register = async(req, res)=>{
   try {
   const user = new User({
    name:req.body.name,
    email:req.body.email,
    passwordHash:bcrypt.hashSync(req.body.password, 10),
    phoneNumber:req.body.phoneNumber
   })
   const newUser = await user.save()
   if(!newUser) return res.status(500).json(`user not created`)
   res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      phoneNumber: user.phoneNumber,
      token: generateToken(user._id)
   })
   } catch (error) {
    console.log(error)
   }
}


//LOGIN EXISTING USER
exports.login = async(req, res)=>{
   const user = await User.findOne({email:req.body.email})
   if(user && bcrypt.compareSync(req.body.password, user.passwordHash)){
      res.status(200).json({
         _id: user._id,
         name: user.name,
         email: user.email,
         isAdmin: user.isAdmin,
         token: generateToken(user._id)
      })
   }else{
      res.status(500).json(`invalid email or pasword`)
   }

}

//LOGOUT USER
exports.logout = async(req, res)=>{
   if(req.body.session){
      req.body.session.destroy(error=>{
         if(error){
            res.status(500).json(`opps something went wrong can not logout`)
         }else{
            res.status(200).send(`you have been logged out!`)
         }
      })
   }else{
      res.end()
   }
   }

   //GENERATE TOKEN FOR USER
const generateToken = (id)=>{
   return jwt.sign({id}, process.env.SECRET_KEY, {expiresIn:'1hr'})
}





