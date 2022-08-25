const getLocalStorageIngredients = (callback, id, drink = false) => {
  if (!JSON.parse(localStorage.getItem('inProgressRecipes'))) {
    localStorage.setItem('inProgressRecipes',
      JSON.stringify({ cocktails: {}, meals: {} }));
  }
  const response = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (drink && response.cocktails[id]) {
    return callback(response.cocktails[id]);
  }
  if (response.meals[id]) {
    return callback(response.meals[id]);
  }
  return ([]);
};

export default getLocalStorageIngredients;
