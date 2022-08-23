import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import ProviderContext from '../../Context/ProviderContext';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <ProviderContext>
        <Router history={ history }>{component}</Router>
      </ProviderContext>
    ), history,
  });
};
export default renderWithRouter;
