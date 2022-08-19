import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validationEmail = email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  const validationPassword = password.length > +'6';
  const history = useHistory();

  const handleClick = () => {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/foods');
  };

  return (
    <form>
      <input
        type="text"
        value={ email }
        data-testid="email-input"
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        type="text"
        value={ password }
        data-testid="password-input"
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ !(validationEmail && validationPassword) }
        onClick={ handleClick }
      >
        Entrar
      </button>
    </form>
  );
}
