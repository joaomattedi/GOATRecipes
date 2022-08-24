import fetchAPI from './fetchAPI';
import ingerdientList from './ingredientList';

const requestDetails = async (
  setDeatils,
  setTypePage,
  setIngredientList,
  match,
) => {
  const endPointFood = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`;
  const endPointDrink = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`;
  switch (true) {
  case match.url.includes('food'): {
    const detailsRequest = await fetchAPI(endPointFood);
    setDeatils(detailsRequest.meals[0]);
    setTypePage('food');
    setIngredientList(ingerdientList(detailsRequest.meals[0], 'food'));
    break;
  }
  case match.url.includes('drink'): {
    const detailsRequest = await fetchAPI(endPointDrink);
    setDeatils(detailsRequest.drinks[0]);
    setTypePage('drink');
    setIngredientList(ingerdientList(detailsRequest.drinks[0], 'drink'));
    break;
  }
  default:
    break;
  }
};

export default requestDetails;
