const ingerdientList = (obj, type) => {
  const ingredients = [];
  if (type === 'food') {
    for (let i = 1; i < +'21'; i += 1) {
      ingredients.push(
        `${obj[`strMeasure${i}`]} - ${obj[`strIngredient${i}`]}`,
      );
    }
  }
  if (type === 'drink') {
    for (let i = 1; i < +'16'; i += 1) {
      ingredients.push(
        `${obj[`strMeasure${i}`]} - ${obj[`strIngredient${i}`]}`,
      );
    }
  }
  return ingredients;
};

export default ingerdientList;
