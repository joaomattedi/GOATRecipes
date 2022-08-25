import React from 'react';
import DoneAndfavoriteRecipes from '../components/DoneAndFavoriteRecipes';
import Header from '../components/Header/Header';

export default function DoneRecipes() {
  return (
    <div>
      <Header pageTitle="Done Recipes" searchIconRender={ false } />
      <DoneAndfavoriteRecipes type="done" />
    </div>
  );
}
