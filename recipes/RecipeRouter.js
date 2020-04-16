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

router.get("/:id/ingredients", (req, res) => {
  const { id } = req.params;
  Recipes.getShoppingList(id)
    .then((ingredients) => {
      if (ingredients.length) {
        res.status(200).json(ingredients);
      } else {
        res
          .status(404)
          .json({
            error: `The recipe with an ID of ${id} has no ingredients associated with it`,
          });
      }
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ error: `The recipe with the id of ${id} cannot be found.` });
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;
  Recipes.getInstructions(id)
    .then((instructions) => {
      if (instructions.length) {
        res.status(200).json(instructions);
      } else {
        res.status(500).json({
          error: `There were no instructions found for the recipe with ID ${id}`,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "server error" });
    });
});

module.exports = router;
