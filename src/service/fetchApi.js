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

export async function getFoodCategories() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const data = await response.json();
  return data.meals;
}
export async function getDrinksCategories() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const data = await response.json();
  return data.drinks;
}

// endpoints do food
export async function fetchSearchBarFoodsIgredient(ingredient) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(url);
  const dataIngredient = await response.json();
  // console.log(dataIngredient);
  return dataIngredient;
}

export async function fetchSearchBarFoodsName(name) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(url);
  const dataName = await response.json();
  // console.log(dataName);
  return dataName;
}

export async function fetchSearchBarFoodsFirstLetter(firstLetter) {
  if (firstLetter.length > 1) {
    global.alert('Your search must have only 1 (one) character');
  } else {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
    const response = await fetch(url);
    const dataFirstLetter = await response.json();
    // console.log(dataFirstLetter);
    return dataFirstLetter;
  }
}

// endpoints dos drinks
export async function fetchSearchBarDrinksIngredient(ingredient) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(url);
  const dataIngredient = await response.json();
  // console.log(dataIngredient);
  return dataIngredient;
}

export async function fetchSearchBarDrinksName(name) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(url);
  const dataName = await response.json();
  // console.log(dataName);
  return dataName;
}

export async function fetchSearchBarDrinksFirstLetter(firstLetter) {
  if (firstLetter.length > 1) {
    global.alert('Your search must have only 1 (one) character');
  } else {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
    const response = await fetch(url);
    const dataFirstLetter = await response.json();
    // console.log(dataFirstLetter);
    return dataFirstLetter;
  }
}
