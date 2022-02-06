export const recipeMaker = {
  //code here
  coffeeRecipes: [
    {
      name: "espresso",
      ingredients: ["espresso"],
    },
    {
      name: "macchiato",
      ingredients: ["espresso", "milk foam"],
    },
    {
      name: "latte",
      ingredients: ["espresso", "milk foam", "steamed milk"],
    },
    {
      name: "cappuccino",
      ingredients: ["espresso", "milk foam", "steamed milk", "chocolate"],
    },
    {
      name: "americano",
      ingredients: ["espresso", "water"],
    },
  ],

giveRecipe: function(coffee: string): string {
  
  const recipe = recipeMaker.coffeeRecipes.filter(oneRecipe => oneRecipe.name === coffee)

  if (recipe.length === 0) {
    return `Sorry, ${coffee} does not exist on our list.`
    
  }
  else{
    return `${recipe[0].name} ingredients:\n- ${recipe[0].ingredients.join(",\n- ")}`;
  }
  
}
}
recipeMaker.giveRecipe("americano");
console.log(recipeMaker.giveRecipe("americano"));
console.log(recipeMaker.giveRecipe("cola"));


