import React, { useState } from 'react';

function Login() {
  const [isDisabled, setIsDisabled] = useState({ disableButton: true });
  const [user, setUser] = useState({ email: '', password: '' });

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
  }

  return (
    <form>
      <input
        type="email"
        name="email"
        data-testid="email-input"
        value={ user.email }
        onChange={ handleChange }
      />
      <input
        type="password"
        name="password"
        id=""
        data-testid="password-input"
        value={ user.password }
        onChange={ handleChange }
      />
      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled={ isDisabled.disableButton }
        onClick={ handleClick }
      >
        Enter
      </button>
    </form>
  );
}

export default Login;
