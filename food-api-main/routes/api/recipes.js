var express = require('express');
const Recipes = require('../../models/recipes'); // getting model here
const Cart = require('../../models/cart');
const validateRecipe = require('../../middleware/validateRecipe');
const auth = require('../../middleware/auth');      //middlewares
const admin = require('../../middleware/admin'); 

var router = express.Router();

// for getting all the recipes 
router.get("/", async (req, res) => { // "/" is the  default route
    let recipes = await Recipes.find(); // recipes variable getting all data from model
    return res.send(recipes); // send data at localhost:4000/api/recipes/
});



router.get("/:id", async (req, res) => { // getting data by ID
    try {

        let recipe = await Recipes.findById(req.params.id); // recipes variable getting data from model by ID
        if (!recipe) { // if not available 
            return res.status(400).send("product is not available with that id ");

        }
        return res.send(recipe); // send data at localhost:4000/api/recipes/
    } catch (err) {
        return res.status(400).send("invalid id"); //Id not available
    } 
});

router.put("/:id", async(req,res)=>{ // update recipes to the DB
    let recipe = await Recipes.findById(req.params.id); // updating recipe by finding ID using model
    recipe.title = req.body.title; // recipe.title getting from the form-inputs 
    recipe.body = req.body.body;
    recipe.price = req.body.price;
    await recipe.save(); //saving the recipes
    return res.send(recipe); // returning the responce for confirmation of saving
});

router.delete("/:id", async(req,res)=>{ // delete recipes from the DB
    let recipe = await Recipes.findByIdAndDelete(req.params.id); //deleting recipe by id
    return res.send(recipe);// returning the responce for confirmation of deleting
});

router.post("/", validateRecipe, async(req,res)=>{ // add new recipes to the DB
    let recipe = new Recipes();
    recipe.title = req.body.title; // recipe.title getting from the form-inputs 
    recipe.body = req.body.body;
    recipe.price = req.body.price;
    await recipe.save();//saving the recipes

    return res.send(recipe); // returning the responce for confirmation of saving
});


module.exports = router;