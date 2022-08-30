import { render, screen, waitFor } from "@testing-library/react"
import  userEvent  from '@testing-library/user-event'
import App from "../App"
import Provider from "../Context/Provider"
import Drinks from "../pages/Drinks"
import Foods from "../pages/Foods"
import renderWithRouter from "./helpers/renderWithRouter"
const fetch = require('../../cypress/mocks/fetch')

afterEach(() => jest.clearAllMocks())

describe('first', () => {
  test('foods', async () => {
    global.fetch = jest.fn(
      fetch
    );
    renderWithRouter(<Provider><Foods/></Provider>)
    await waitFor(() => expect(global.fetch).toHaveBeenCalled())
    const detailsButton = screen.getByTestId('0-recipe-card')
    userEvent.click(detailsButton)
  })
  test('drinks', async () => {
    global.fetch = jest.fn(
      fetch
    );
    renderWithRouter(<Provider><Drinks/></Provider>)
    await waitFor(() => expect(global.fetch).toHaveBeenCalled())
    const detailsButton = screen.getByTestId('0-recipe-card')
    userEvent.click(detailsButton)
    
  })
})