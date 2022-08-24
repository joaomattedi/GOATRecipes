import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
// import Context from '../../Context/Context';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(
        <Router history={ history }>{component}</Router>
    ), history,
  });
};
export default renderWithRouter;
