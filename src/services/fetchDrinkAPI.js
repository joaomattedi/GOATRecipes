const fetchDrinkAPI = async (searchOption, searchInput) => {
  let endpoint = '';
  try {
    if (searchOption === 'ingredient') {
      endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInput}`;
    }

    if (searchOption === 'name') {
      endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`;
    }

    if (searchOption === 'first-letter') {
      endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchInput}`;
    }
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default fetchDrinkAPI;
