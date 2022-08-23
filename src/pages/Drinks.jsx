import React from 'react';
import Header from '../components/Header/Header';
import Recipes from '../components/Recipes/Recipes';

export default function Drinks() {
  return (
    <div>
      <Header pageTitle="Drinks" />
      <Recipes drink />
    </div>
  );
}
