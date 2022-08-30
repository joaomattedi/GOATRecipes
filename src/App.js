import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Provider from './Context/Provider';
import Routes from './Routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
