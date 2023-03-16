const {CustomAPIError} = require('../errors/custom-error')

const errorHandler = (err,req,res,next)=>{
    //if the error is the custom error we do this
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message})
    }
    //otherwise the err is now the normal err that the asyncWrapper sends with next. 
    return res.status(500).json({ msg: err.message })
}

module.exports = errorHandler