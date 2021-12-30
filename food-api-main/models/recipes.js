var mongoose = require('mongoose');
const Joi = require('@hapi/joi');

var recipesSchema = mongoose.Schema(
    {
        title: String,
        body: String,
        price: Number,
    });


var Recipe = mongoose.model("Recipe",recipesSchema);

function validateRecipes(data){
const schema =Joi.object(
{
title:Joi.string().min(3).max(20).required(),
body:Joi.string().min(5).max(150).required(),
price:Joi.number().min(0).required()

})
return schema.validate(data ,{abortEarly:false});
}


module.exports=Recipe;
module.exports.validate = validateRecipes;