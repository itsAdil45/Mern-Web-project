// var mongoose = require('mongoose');
// const Joi = require('@hapi/joi');
// var bcryptjs = require("bcryptjs");

// var userSchema = mongoose.Schema(
//     {
//         name: String,
//         email: String,
//         password: String,
//         role:{
//             type:String ,
//             default:"user"
//         }
//     });



// // const User = mongoose.models.User
// var User = mongoose.model("User",userSchema);


// // function loadmodel(User,userSchema){
// // return mongoose.models[User]? mongoose.model(User): mongoose.model(User,userSchema)
// // }

// function validateUser(data){
// const schema =Joi.object(
// {
// name:Joi.string().min(3).max(20).required(),
// email:Joi.string().email().min(3).max(50).required(),
// password:Joi.string().min(5).max(12).required()

// })
// return schema.validate(data ,{abortEarly:false});
// }


// function validateUserLogin(data){
//     const schema =Joi.object(
//     {
//     email:Joi.string().email().min(3).max(50).required(),
//     password:Joi.string().min(5).max(12).required()
    
//     })
//     return schema.validate(data ,{abortEarly:false});
//     }


// module.exports=User;

// // module.exports=()=>loadmodel ('User',userSchema);
// module.exports.validate = validateUser;
// module.exports.validateUserLogin = validateUserLogin;


const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});
const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = User;