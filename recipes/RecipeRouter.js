const express = require("express");

const Recipes = require("../data/db-recipeModel");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: `Unable to retrieve recipes from the server` });
    });
});

module.exports = router;
