// import React from 'react';
// import { screen, waitFor } from '@testing-library/react';
// import renderWithRouter from './helper/renderWithRouter';
// import App from '../App';
// import userEvent from '@testing-library/user-event';
// import mealsByIngredient from './mocks/mealsByIngredients';

// describe('Testa a página Recipe Details', () => {

//     beforeEach(() => {
//         jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
//           json: () => Promise.resolve(mealsByIngredient),
//         }));
//       });
    
//       afterEach(() => jest.clearAllMocks());

//   it('Verifica se a pagina é renderizada corretamente', async () => {
// 		const { history } = renderWithRouter(<App />)
//         history.push('/foods/52940')

//         await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(2));

//         // const ingredient = screen.getByTestId('0-ingredient-name-and-measure')
//         // const photo = screen.getByTestId('recipe-photo');
//         // const text = screen.getByTestId('recipe-category');
//         // const title = screen.getByTestId('recipe-title')

//         // expect(ingredient).toHaveTextContent('Chicken: 1 whole');
//         // expect(photo).toBeInTheDocument();
//         // expect(text).toHaveTextContent('Chicken');
//         // expect(title).toHaveTextContent('Brown Stew Chicken');
//         // expect(global.fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52940')
//   });
// });