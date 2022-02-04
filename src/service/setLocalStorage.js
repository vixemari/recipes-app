const setLocalStorage = (food) => {
  if (localStorage.getItem('favoriteRecipes')) {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    favoriteRecipes.push({ id: food.idMeal,
      type: 'meal',
      nationality: food.strArea,
      category: food.strCategory,
      alcoholicOrNot: 'notAlcoholic',
      name: food.strMeal,
      image: food.strMealThumb,
    });
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  } else {
    const favoriteRecipes = [];
    favoriteRecipes.push({ id: food.idMeal,
      type: 'meal',
      nationality: food.strArea,
      category: food.strCategory,
      alcoholicOrNot: 'notAlcoholic',
      name: food.strMeal,
      image: food.strMealThumb,
    });
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }
};

export default setLocalStorage;
