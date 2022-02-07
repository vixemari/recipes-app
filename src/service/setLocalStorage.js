export const setLocalStorageDrink = (drink) => {
  if (localStorage.getItem('favoriteRecipes')) {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    favoriteRecipes.push({
      id: drink.idDrink,
      type: 'drink',
      nationality: '',
      category: drink.strCategory,
      alcoholicOrNot: drink.strAlcoholic,
      name: drink.strDrink,
      image: drink.strDrinkThumb,
    });
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  } else {
    const favoriteRecipes = [];
    favoriteRecipes.push({
      id: drink.idDrink,
      type: 'drink',
      nationality: '',
      category: drink.strCategory,
      alcoholicOrNot: drink.strAlcoholic,
      name: drink.strDrink,
      image: drink.strDrinkThumb,
    });
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }
};

export const setLocalStorage = (food) => {
  if (localStorage.getItem('favoriteRecipes')) {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    favoriteRecipes.push({
      id: food.idMeal,
      type: 'food',
      nationality: food.strArea,
      category: food.strCategory,
      alcoholicOrNot: '',
      name: food.strMeal,
      image: food.strMealThumb,
    });
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  } else {
    const favoriteRecipes = [];
    favoriteRecipes.push({
      id: food.idMeal,
      type: 'food',
      nationality: food.strArea,
      category: food.strCategory,
      alcoholicOrNot: '',
      name: food.strMeal,
      image: food.strMealThumb,
    });
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }
};
