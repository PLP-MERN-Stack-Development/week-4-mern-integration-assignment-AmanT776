require("dotenv").config();
const jwt = require('jsonwebtoken');

exports.protect = (req,res,next)=>{
    const auth = req.headers.authorization;
    if(!auth) return res.status(401).json({message: "unauthorized"});
    const token = auth.split(" ")[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        console.log(err);
    }
}

exports.authorize = (roles)=>{
    return (req,res,next)=>{
        const role = req.body.role;
        if(!roles.includes(role)) return res.status(403).json({message: "forbidden"});
    }
}
