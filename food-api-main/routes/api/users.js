var express = require('express');
var router = express.Router();
var User = require("../../models/User"); // getting user model
var bcryptjs = require("bcryptjs"); // for security
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const { valid } = require('@hapi/joi');
const config = require("config"); 



router.post("/register" , async(req,res)=>{ // creating new user at route /api/users/register (post)
let user = await User.findOne({email:req.body.email}); // checking user if already exist or not by id
if(user){
return res.status(400).send("email already in use");
}
user = new User(); // creating new obj 
user.name = req.body.name; // adding data from input-form in obj
user.email =  req.body.email;
user.password = req.body.password;

// let salt = await bcryptjs.genSalt(12); // using bcrypt for endcoding password for safety
// this.password = await bcryptjs.hash(this.password,salt);

await user.save();

return res.send(_.pick(user,["name","email"])); // returning data for confirmation of saving using loadash "_"

})



router.post("/login" , async(req,res)=>{
  let user = await User.findOne({email:req.body.email}); // checking user if logged in or not
  if(!user){
  return res.status(400).send("not a user");
  }

  let isvalid = await bcryptjs.compare(req.body.password,user.password  ); // comparing user entered pass with DB pass
  if(!isvalid){
    return res.status(401).send("invalid pass");
  }
  let token = jwt.sign({_id: user._id, name: user.name}, config.get('jwtPrivatekey'));
  // generating token for that id
  return res.send(token); 

  

})




module.exports = router;
