const User = require('../models/usermodels')

exports.authorizedUser = async(req, res, next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startswith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.log(error)
            res.status(500).json(`invalid token, not authorize`)
        }

    }else{
        if(!token){
            console.log(error)
            res.status(500).json(`no token, not authorized`)
        }
    }
}

exports.admin = async(req, res, next)=>{
    if(req.user && req.user.isAdmin){
        next()
    }else{
        res.status(500).json(`not authorized as an admin`)
    }
}