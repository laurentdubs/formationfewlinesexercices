  type CoffeeRecipe = {
    name: string;
    ingredients: string[];
  };

  const coffeeRecipes: CoffeeRecipe[] = [
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
  ];
  
  export function giveRecipe(coffee: string): string {
   
  
  const recipe = coffeeRecipes.filter(oneRecipe => oneRecipe.name === coffee);
  
    console.log(recipe,47);
    
    
   if (recipe.length === 0) {
    return `Sorry, ${coffee} does not exist on our list.`
    
  }
  else{
    return `${recipe[0].name} ingredients:\n- ${recipe[0].ingredients.join(",\n- ")}`;
  }
    
 
}
//giveRecipe("cola");
console.log(giveRecipe("americano"));


