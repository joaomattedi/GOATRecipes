import React from 'react';
import Header from '../components/Header/Header';
import Recipes from '../components/Recipes/Recipes';

export default function Foods() {
  return (
    <div>
      <Header pageTitle="Foods" />
      <Recipes />
    </div>
  );
}
