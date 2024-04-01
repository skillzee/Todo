class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode
    }
}


export const errorMiddleWare =(err, req,res, next)=>{
    console.log(err.message);
    return res.status(404).json({
        success: false,
        message: err.message
    })
}

export default ErrorHandler