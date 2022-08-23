// import React from 'react';
// import { screen } from '@testing-library/react';
// import renderWithRouter from './helper/renderWithRouter';
// import App from '../App';
// import userEvent from '@testing-library/user-event';

// describe('Testa Footer', () => {
//   it('Verifica funcionalidades do FOoter', () => {
//     const { history } = renderWithRouter(<App />);
//     history.push('/foods');

//     const drinkButton = screen.getByTestId('drinks-bottom-btn');
//     const foodButton = screen.getByTestId('food-bottom-btn');
    
//     expect(foodButton).toBeInTheDocument();
//     expect(drinkButton).toBeInTheDocument();

//     userEvent.click(drinkButton);
    
//     expect(history.location.pathname).toBe('/drinks');
        
//     userEvent.click(foodButton);

//     expect(history.location.pathname).toBe('/foods');
//   })
// })
