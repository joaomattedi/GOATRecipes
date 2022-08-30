const saveDoneRecipe = (recipe, drink) => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();

  today = `${dd}/${mm}/${yyyy}`;
  const doneShape = {
    id: drink ? recipe.idDrink : recipe.idMeal,
    type: drink ? 'drink' : 'food',
    nationality: drink ? '' : recipe.strArea,
    category: recipe.strCategory,
    alcoholicOrNot: drink ? recipe.strAlcoholic : '',
    name: drink ? recipe.strDrink : recipe.strMeal,
    image:
      drink ? recipe.strDrinkThumb : recipe.strMealThumb,
    doneDate: today,
    tags: [recipe.strTags],
  };
  if (!localStorage.getItem('doneRecipes')) {
    localStorage.setItem('doneRecipes', JSON.stringify([doneShape]));
  } else {
    const prevStorage = JSON.parse(localStorage.getItem('doneRecipes'));
    localStorage.setItem('doneRecipes', JSON.stringify([...prevStorage, doneShape]));
  }
};

export default saveDoneRecipe;
