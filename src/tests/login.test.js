// import React from 'react';
// import { screen } from '@testing-library/react';
// import renderWithRouter from './helper/renderWithRouter';
// import App from '../App';
// import userEvent from '@testing-library/user-event';

// describe('Testa a pagina de Login', () => {
//   it('Verifica funcionalidade do login', () => {
// 		const { history } = renderWithRouter(<App />)

// 		const inputEmail = screen.getByTestId('email-input');
// 		const inputPassword =  screen.getByTestId('password-input');
// 		const button = screen.getByTestId('login-submit-btn');

// 		expect(inputEmail).toBeInTheDocument();
// 		expect(inputPassword).toBeInTheDocument();
// 		expect(button).toBeInTheDocument();

// 		expect(button).toBeDisabled();

// 		userEvent.type(inputEmail, 'teste.com');
// 		userEvent.type(inputPassword, '1234567');

// 		expect(button).toBeDisabled();
		

// 		userEvent.type(inputEmail, 'teste@teste.com');
// 		userEvent.type(inputPassword, '1234567');

// 		expect(button).not.toBeDisabled();

// 		userEvent.click(button);

// 		expect(history.location.pathname).toBe('/foods');
//   })

//   it('Verifica se o e-mail é salvo na chave user e os tokens nas chaves mealsToken e cocktailsToken', () => {
// 	const { history } = renderWithRouter(<App />);

// 	expect(history.location.pathname).toBe('/');
	
// 	const inputEmail = screen.getByTestId('email-input');
// 	const inputPassword =  screen.getByTestId('password-input');
// 	const button = screen.getByTestId('login-submit-btn');

// 	userEvent.type(inputEmail, 'teste@teste.com');
// 	userEvent.type(inputPassword, '1234567');
	
// 	userEvent.click(button);

// 	expect(history.location.pathname).toBe('/foods');

// 	const user = JSON.parse(localStorage.getItem('user'));
// 	const mealsToken = localStorage.getItem('mealsToken');
// 	const cocktailsToken = localStorage.getItem('cocktailsToken');
// 	expect(user.email).toBe('teste@teste.com');
// 	expect(cocktailsToken).toBe('1');
// 	expect(mealsToken).toBe('1');
//   })

// })
