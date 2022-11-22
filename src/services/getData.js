import { apiKey } from "../apiKey/apiKey.js";

const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";

//&diet=vegetarian&maxFat=25&number=10&addRecipeInformation=true

const getRecipe = async (id) => {
  const res = await fetch(`${baseUrl}/recipes/${id}`);
  const data = await res.json();
  return data;
};

const getRecipes = async (number, value) => {
  const res = await fetch(
    `${baseUrl}?${apiKey}&diet=${value}&maxFat=25&number=${number}&addRecipeInformation=true`
  );
  const data = await res.json();
  return data;
};

/* const dietRecipes = async (diet) => {
  const res = await fetch(`${baseUrl}?${apiKey}&`)
} */

export { getRecipe, getRecipes };
