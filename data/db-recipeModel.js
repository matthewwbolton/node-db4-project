const knex = require("knex");
const knexfile = require("../knexfile");
const db = knex(knexfile.development);

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  db.select("i.ingredient_name", "ri.quantity")
    .from("ingredients as i")
    .join("recipe_ingredients as ri", "i.id", "ri.ingredient_id")
    .where("ri.recipe_id", recipe_id);
}

function getInstructions(recipe_id) {
  db.select("instruction")
    .from("recipes as r")
    .join("instructions as i", "r.id", "i.recipe_id")
    .where("r.id", recipe_id);
}
