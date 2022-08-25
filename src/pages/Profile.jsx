import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Profile() {
  const history = useHistory();
  const email = localStorage.getItem('user');
  return (
    <div>
      <Header pageTitle="Profile" searchIconRender={ false } />
      <p data-testid="profile-email">{email}</p>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => history.push('/done-recipes') }
      >
        Done Recipes

      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => history.push('/favorite-recipes') }
      >
        Favorite Recipes

      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ () => {
          localStorage.clear();
          history.push('/');
        } }
      >
        Logout

      </button>
      <Footer />
    </div>
  );
}
