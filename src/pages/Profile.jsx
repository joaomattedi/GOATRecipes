import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Profile() {
  return (
    <div>
      <Header pageTitle="Profile" searchIconRender={ false } />
      <Footer />
    </div>
  );
}
