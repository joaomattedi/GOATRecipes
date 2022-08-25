import React from 'react';
import DoneAndfavoriteRecipes from '../components/DoneAndFavoriteRecipes';
import Header from '../components/Header/Header';

export default function FavoriteRecipes() {
  return (
    <div>
      <Header pageTitle="Favorite Recipes" searchIconRender={ false } />
      <DoneAndfavoriteRecipes type="favorite" />
    </div>
  );
}
