import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header/Header';
import mealsByIngredients from './mocks/mealsByIngredients';
import Routes from '../Routes/Routes';
import drinks from './mocks/drinks';

describe('Testa a barra de busca na página de comidas', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mealsByIngredients),
    }));
  });
 
  afterEach(() => jest.clearAllMocks());
  
  it('Verifica a funcionalidade do filtro de ingredientes', async () => {
    const { history } = renderWithRouter(<Header />);
    history.push('/foods');

    const openSearchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(openSearchBtn);

    const search = screen.getByTestId('search-input');
    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    const searchButton = screen.getAllByRole('button', { name:/search/i });

    userEvent.click(ingredientRadio);
    userEvent.type(search, 'chicken');
    userEvent.click(searchButton[1]);

    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken'));
  });

  it('Verifica a funcionalidade do filtro de nome', async () => {
    const { history } = renderWithRouter(<Header />);
    history.push('/foods');

    const openSearchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(openSearchBtn);

    const searchInput = screen.getByTestId('search-input');
    const nameRadio = screen.getByTestId('name-search-radio');
    const searchButton = screen.getByTestId('exec-search-btn');

    userEvent.click(nameRadio);
    userEvent.type(searchInput, 'Chicken');
    userEvent.click(searchButton);

    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken'));
  });

  it('Verifica a funcionalidade do filtro de primeira letra', async () => {
    const { history } = renderWithRouter(<Header />);
    history.push('/foods');

    const openSearchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(openSearchBtn);

    const searchInput = screen.getByTestId('search-input');
    const firstLetterRadio = screen.getByTestId('first-letter-search-radio');
    const searchButton = screen.getByTestId('exec-search-btn');

    userEvent.click(firstLetterRadio);
    userEvent.type(searchInput, 'l');
    userEvent.click(searchButton);

    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?f=l'));
  });

  it('Verifica se ao selecionar uma letra e pesquisar por duas alert é disparado', async () => {
    global.alert = jest.fn();
    const { history } = renderWithRouter(<Header />);
    history.push('/foods');

    jest.spyOn(global, 'fetch').mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve({ 'meals': null }),
    }));

    const btnOpenSearch = screen.getByTestId('search-top-btn');
    userEvent.click(btnOpenSearch);

    const searchInput = screen.getByTestId('search-input');
    const firstLetterRadio = screen.getByTestId('first-letter-search-radio');
    const searchButton = screen.getByTestId('exec-search-btn');

    userEvent.click(firstLetterRadio);
    userEvent.type(searchInput, 'ab');
    userEvent.click(searchButton);
    
    await waitFor(() => expect(global.alert).toBeCalledWith('Your search must have only 1 (one) character'))
  });

  it('Verifica se ao pesquisar por xablau alert é disparado', async () => {
    global.alert = jest.fn();
    const { history } = renderWithRouter(<Header />);
    history.push('/foods');

    jest.spyOn(global, 'fetch').mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve({ 'meals': null }),
    }));

    const btnOpenSearch = screen.getByTestId('search-top-btn');
    userEvent.click(btnOpenSearch);

    const searchInput = screen.getByTestId('search-input');
    const searchButton = screen.getByTestId('exec-search-btn');

    userEvent.type(searchInput, 'xablau');
    userEvent.click(searchButton);

    const initMessage = 'Sorry, we haven';
    await waitFor(() => expect(global.alert).toBeCalledWith(`${initMessage}'t found any recipes for these filters.`))
  });

  it('Verifica se ao encontrar um item é redirecionado para a página de detalhes', async () => {
    const { history } = renderWithRouter(<Routes />);
    history.push('/foods');

    jest.spyOn(global, 'fetch').mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve({
        'meals': [
          {
            'strMeal': 'Brown Stew Chicken',
            'strMealThumb': 'https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg',
            'idMeal': '52940'
          }
        ]
      }),
    }));

    const openSearchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(openSearchBtn);

    const search = screen.getByTestId('search-input');
    const nameRadio = screen.getByTestId('name-search-radio');
    const searchButton = screen.getByTestId('exec-search-btn');

    userEvent.click(nameRadio);
    userEvent.type(search, 'Brown Stew Chicken');
    userEvent.click(searchButton);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled()); 
  });
});

  // Página de bebidas
describe('Testa a barra de busca na página de bebidas', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(drinks),
    }));
  });

  afterEach(() => jest.clearAllMocks());

  it('Verifica a funcionalidade do filtro de ingredientes', async () => {
    const { history } = renderWithRouter(<Routes />);
    history.push('/drinks');

    const openSearchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(openSearchBtn);

    const searchInput = screen.getByTestId('search-input');
    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    const searchButton = screen.getByTestId('exec-search-btn');

    userEvent.click(ingredientRadio);
    userEvent.type(searchInput, 'tequila');
    userEvent.click(searchButton);

    await waitFor(() => expect(global.fetch).toBeCalledWith('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=tequila'));
  });

  it('Verifica a funcionalidade do filtro de nome', async () => {
    const { history } = renderWithRouter(<Routes />);
    history.push('/drinks');

    const openSearchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(openSearchBtn);

    const searchInput = screen.getByTestId('search-input');
    const nameRadio = screen.getByTestId('name-search-radio');
    const searchButton = screen.getByTestId('exec-search-btn');

    userEvent.click(nameRadio);
    userEvent.type(searchInput, 'mojito');
    userEvent.click(searchButton);

    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito'));
  });

  it('Verifica a funcionalidade do filtro de primeira letra', async () => {
    const { history } = renderWithRouter(<Routes />);
    history.push('/drinks');

    const openSearchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(openSearchBtn);
    
    const search = screen.getByTestId('search-input');
    const radio3 = screen.getByTestId('first-letter-search-radio');

    const searchInput = screen.getByTestId('search-input');
    const firstLetterRadio = screen.getByTestId('first-letter-search-radio');
    const searchButton = screen.getByTestId('exec-search-btn');

    userEvent.click(firstLetterRadio);
    userEvent.type(searchInput, 'v');
    userEvent.click(searchButton);

    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=v'));
       
  });
});
