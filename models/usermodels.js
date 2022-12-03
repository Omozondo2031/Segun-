const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
      name: {
        type: String,
        require:true
      },
      email: {
        type: String,
        require:true
      },
      passwordHash: {
        type: String,
        require:true
      },
      phoneNumber:{
        type:String,
        require:true
      },

      isAdmin: {
        type: Boolean,
        required: true,
        default: false,
     
      },
      },
      {
        timestamps: true,
      },
  )
  
const User = mongoose.model('User', userSchema)
module.exports = User