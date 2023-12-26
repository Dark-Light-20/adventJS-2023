function organizeChristmasDinner(dishes) {
  const ingredients = {};
  for (const dish of dishes) {
    for (const ingredient of dish.slice(1)) {
      if (ingredients[ingredient]) {
        ingredients[ingredient].push(dish[0]);
      } else {
        ingredients[ingredient] = [dish[0]];
      }
    }
  }
  const sortedDishes = Object.entries(ingredients)
    .filter((dishes) => dishes[1].length > 1)
    .map((dishes) => [dishes[0], ...dishes[1].sort()]);
  return sortedDishes.sort((a, b) => a[0].localeCompare(b[0]));
}

const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
];

const answer1 = organizeChristmasDinner(dishes);
console.log(answer1);

/*

"sauce" is in 2 dishes: "christmas turkey" and "pizza".
"sugar" is in 2 dishes: "cake" and "hot chocolate".
The rest of the ingredients only appear in one dish, so we do not show them.

We show "sauce" first because alphabetically it comes before "sugar".
And the dishes of each ingredient are also alphabetically ordered.

[
  ["sauce", "christmas turkey", "pizza"],
  ["sugar", "cake", "hot chocolate"]
]
*/

/* 
    Points earned: 130
    1,245 ops/s (Higher is better)
    Cognitive complexity: 5 (Lower is better)
*/
