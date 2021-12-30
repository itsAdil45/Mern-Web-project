function admin(req , res , next){
if(req.user.role != "admin"){

return res.status(400).send("anautherized person");

}
next();


}


module.exports=admin;