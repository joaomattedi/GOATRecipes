import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header/Header';

describe('Testes do componente Header', () => {
  it('Verifica se a pagina é redirecionada ao PROFILE ao clicar na imagem de perfil', () => {
    const { history } = renderWithRouter(<Header />);

    const profileBtn = screen.getByTestId('profile-top-btn');
    userEvent.click(profileBtn);

		expect(history.location.pathname).toBe('/profile');
  });

  it('Verifica funcionalidades do Header', () => {
    renderWithRouter(<Header />);

    const openSearchBtn = screen.getByTestId('search-top-btn'); 
    const title = screen.getByTestId('page-title');

    expect(title).toBeInTheDocument();

    userEvent.click(openSearchBtn);

    const searchInput = screen.getByTestId('search-input');
    const radio1 = screen.getByTestId('ingredient-search-radio');
    const radio2 = screen.getByTestId('name-search-radio');
    const radio3 = screen.getByTestId('first-letter-search-radio');
    const execSearchBtn = screen.getByTestId('exec-search-btn');

    expect(searchInput).toBeInTheDocument();
    expect(radio1).toBeInTheDocument();
    expect(radio2).toBeInTheDocument();
    expect(radio3).toBeInTheDocument();
    expect(execSearchBtn).toBeInTheDocument();

    userEvent.click(openSearchBtn);

    expect(searchInput).not.toBeInTheDocument();
    expect(radio1).not.toBeInTheDocument();
    expect(radio2).not.toBeInTheDocument();
    expect(radio3).not.toBeInTheDocument();
    expect(execSearchBtn).not.toBeInTheDocument();
  });
});
