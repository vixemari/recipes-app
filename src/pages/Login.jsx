import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import LoginStyle from '../style/LoginStyle';
import logoGif from '../assets/TryFood.gif';

function Login() {
  const [isDisabled, setIsDisabled] = useState({ disableButton: true });
  const [user, setUser] = useState({ email: '', password: '' });
  const [redirect, setRedirect] = useState({ canRedirect: false });
  function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  function enableButton() {
    const NUMBER_MAX_PASSWORD = 6;
    if (user.password.length >= NUMBER_MAX_PASSWORD
      && user.password.length !== 0 && validateEmail(user.email)) {
      setIsDisabled({ disableButton: false });
    } else {
      setIsDisabled({ disableButton: true });
    }
  }

  function handleChange({ target }) {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
    enableButton();
  }

  function handleClick(event) {
    event.preventDefault();
    const TOKEN = 1;
    localStorage.setItem('mealsToken', JSON.stringify(TOKEN));
    localStorage.setItem('cocktailsToken', JSON.stringify(TOKEN));
    localStorage.setItem('user', JSON.stringify({ email: user.email }));
    setRedirect({ canRedirect: true });
  }

  return (
    <LoginStyle>
      <img
        src={ logoGif }
        alt="gif da logo"
      />
      <input
        type="email"
        name="email"
        data-testid="email-input"
        value={ user.email }
        onChange={ handleChange }
        placeholder="E-mail"
      />
      <input
        type="password"
        name="password"
        id=""
        data-testid="password-input"
        value={ user.password }
        onChange={ handleChange }
        placeholder="Password"
      />
      <button
        className="example"
        type="submit"
        data-testid="login-submit-btn"
        disabled={ isDisabled.disableButton }
        onClick={ handleClick }
      >
        Enter
      </button>
      { redirect.canRedirect && <Redirect to="/foods" />}
    </LoginStyle>
  );
}

export default Login;
