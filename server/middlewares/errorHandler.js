exports.errorHandler = (err,req,res,next)=>{
    const message = err.message || "Internal server error";
    res.status(500).json({message: message})
}