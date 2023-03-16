

class CustomAPIError extends Error{
    constructor(message, statusCode){
        //super invokes the constructor of the parent class
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg, statusCode) =>{
    return new CustomAPIError(msg, statusCode)
}

module.exports = {createCustomError, CustomAPIError}