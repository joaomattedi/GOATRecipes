 import React from 'react';
 import { screen } from '@testing-library/react';
 import renderWithRouter from './helpers/renderWithRouter';
 import Footer from '../components/Footer/Footer';
 import userEvent from '@testing-library/user-event';
 import Provider from '../Context/Provider'


 describe('Testa Footer', () => {
   it('Verifica funcionalidades do Footer', () => {
     const { history } = renderWithRouter(<Provider><Footer/></Provider>)

     const footer = screen.getByTestId('footer')
     const drinkButton = screen.getByTestId('drinks-bottom-btn');
     const foodButton = screen.getByTestId('food-bottom-btn');
     
     expect(footer).toBeInTheDocument();
     expect(foodButton).toBeInTheDocument();
     expect(drinkButton).toBeInTheDocument();
   })

   it('Verifica se o footer está direcionando', () => {
    const { history } = renderWithRouter(<Provider><Footer/></Provider>)

    const drinkButton = screen.getByTestId('drinks-bottom-btn');
    const foodButton = screen.getByTestId('food-bottom-btn');
    
    userEvent.click(drinkButton);
    expect(history.location.pathname).toBe('/drinks');
    userEvent.click(drinkButton);
    expect(history.location.pathname).toBe('/foods');

  })
   
   })
