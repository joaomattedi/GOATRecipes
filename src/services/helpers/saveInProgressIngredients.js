const saveInProgressIngredients = (ingredients, id, drink = false) => {
  const savedIngredients = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const newValue = drink
    ? {
      ...savedIngredients,
      cocktails: { ...savedIngredients.cocktails, [id]: ingredients },
    }
    : { ...savedIngredients, meals: { ...savedIngredients.meals, [id]: ingredients } };

  console.log(newValue);
  localStorage.setItem('inProgressRecipes', JSON.stringify(newValue));
};

export default saveInProgressIngredients;
