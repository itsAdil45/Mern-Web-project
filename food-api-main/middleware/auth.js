const jwt = require("jsonwebtoken");
const config = require("config");
var User = require("../models/User");

async function auth(req,res,next){
    let token = req.header("x-auth-token");
    if(!token) return res.status(400).send("token not provided");
    try{
        let user = jwt.verify(token , config.get("jwtPrivatekey"));
        req.user = await User.findById(user._id);

    }catch(err){

       return res.send.status(400).send("invalid token");
    }
    next();

}
module.exports = auth;