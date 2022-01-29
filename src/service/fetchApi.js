export async function getMeals() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const data = await response.json();
  return data.meals;
}

export async function getDrinks() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const data = await response.json();
  return data.drinks;
}

export const fetchSearchBarHeaderIgredient = async (ingredient) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(url);
  const dataIngredient = await response.json();
  console.log(dataIngredient);
};

export const fetchSearchBarHeaderName = async (name) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(url);
  const dataName = await response.json();
  console.log(dataName);
};

export const fetchSearchBarHeaderFirstLetter = async (firstLetter) => {
  if (firstLetter.length > 1) {
    global.alert('Your search must have only 1 (one) character');
  } else {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
    const response = await fetch(url);
    const dataFirstLetter = await response.json();
    console.log(dataFirstLetter);
  }
};

