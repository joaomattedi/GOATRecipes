import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from './helper/renderWithRouter';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testa a pagina de Login', () => {
  it('Verifica funcionalidade do login', async () => {
		const { history } = renderWithRouter(<App />)

		const inputEmail = screen.getByTestId('email-input');
		const inputPassword =  screen.getByTestId('password-input');
		const button = screen.getByTestId('login-submit-btn');

		expect(inputEmail).toBeInTheDocument();
		expect(inputPassword).toBeInTheDocument();
		expect(button).toBeInTheDocument();

		expect(button).toBeDisabled();

		userEvent.type(inputEmail, 'teste.com');
		userEvent.type(inputPassword, '1234567');

		expect(button).toBeDisabled();
		
		userEvent.clear(inputEmail)
		userEvent.clear(inputPassword)
		userEvent.type(inputEmail, 'teste@teste.com');
		expect(inputEmail).toHaveProperty('value','teste@teste.com');
		userEvent.type(inputPassword, '1234567');
		expect(inputPassword).toHaveProperty('value','1234567');


		expect(button).not.toBeDisabled();

		userEvent.click(button);
    await waitFor(async () =>  expect(await screen.findByTestId('0-card-name')).toBeInTheDocument())


		expect(window.location.pathname).toBe('/foods')
  })

})
