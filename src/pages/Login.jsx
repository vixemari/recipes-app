import React from 'react';

function Login() {
  return (
    <form>
      <input type="email" name="email" data-testid="email-input" />
      <input type="password" name="password" id="" data-testid="password-input" />
      <button type="submit" data-testid="login-submit-btn">Enter</button>
    </form>
  );
}

export default Login;
