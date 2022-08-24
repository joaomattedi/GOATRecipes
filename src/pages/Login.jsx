import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import Header from '../components/Header/Header';

export default function Login() {
  return (
    <div>
      <Header pageTitle="Profile" searchIconRender />
      <LoginForm />
    </div>);
}
