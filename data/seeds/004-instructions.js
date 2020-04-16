exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("instructions").insert([
        { instruction: "Add 1 quart water", recipe_id: 1, step_number: 1 },
        { instruction: "Add 1 cup sugar", recipe_id: 1, step_number: 2 },
        {
          instruction: "Add the juice of 6 lemons",
          recipe_id: 1,
          step_number: 3,
        },
        {
          instruction: "Apply butter to one side of each slice of bread evenly",
          recipe_id: 2,
          step_number: 1,
        },
        {
          instruction: "Sprinkle cinnamon on each slice distributed evenly",
          recipe_id: 2,
          step_number: 2,
        },
        {
          instruction:
            "Sprinkle sugar on each slice on the same side as cinnamon and butter",
          recipe_id: 2,
          step_number: 3,
        },
        {
          instruction:
            "Place bread slices underneath the broiler for 2 minutes or until golden brown",
          recipe_id: 2,
          step_number: 4,
        },
        {
          instruction: "Enjoy your delicious cinnamon toast",
          recipe_id: 2,
          step_number: 5,
        },
      ]);
    });
};
