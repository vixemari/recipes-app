const ERROR_FOOD_DRINK_NULL = 'Sorry, we haven\'t found any recipes for these filters.';
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
  if (dataIngredient.meals !== null) {
    console.log(dataIngredient);
    return dataIngredient;
  }
  global.alert(ERROR_FOOD_DRINK_NULL);
}

export async function fetchSearchBarFoodsName(name) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(url);
  const dataName = await response.json();
  if (dataName.meals !== null) {
    console.log(dataName);
    return dataName;
  }
  global.alert(ERROR_FOOD_DRINK_NULL);
}

export async function fetchSearchBarFoodsFirstLetter(firstLetter) {
  if (firstLetter.length > 1) {
    global.alert('Your search must have only 1 (one) character');
  } else {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
    const response = await fetch(url);
    const dataFirstLetter = await response.json();
    if (dataFirstLetter.meals !== null) {
      console.log(dataFirstLetter);
      return dataFirstLetter;
    }
    global.alert(ERROR_FOOD_DRINK_NULL);
  }
}

// endpoints dos drinks
export async function fetchSearchBarDrinksIngredient(ingredient) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(url);
  const dataIngredient = await response.json();
  if (dataIngredient.drinks !== null) {
    console.log(dataIngredient);
    return dataIngredient;
  }
  global.alert(ERROR_FOOD_DRINK_NULL);
}

export const filter = async (api) => {
  const result = await fetch(api);
  const data = await result.json();
  return data;
};

export async function fetchSearchBarDrinksName(name) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(url);
  const dataName = await response.json();
  if (dataName.drinks !== null) {
    console.log(dataName);
    return dataName;
  }
  global.alert(ERROR_FOOD_DRINK_NULL);
}

export async function fetchSearchBarDrinksFirstLetter(firstLetter) {
  if (firstLetter.length > 1) {
    global.alert('Your search must have only 1 (one) character');
  } else {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
    const response = await fetch(url);
    const dataFirstLetter = await response.json();
    if (dataFirstLetter.drinks !== null) {
      console.log(dataName);
      return dataFirstLetter;
    }
    global.alert(ERROR_FOOD_DRINK_NULL);
  }
}
