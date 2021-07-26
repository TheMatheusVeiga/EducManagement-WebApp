import React from 'react';
import Base from './content/Base';
import './style/index.css';

const Login = () => (
  <Base>
    <div className="card">
      <h2>Login</h2>
      <br />
      <label htmlFor="username" className="input">
        <input name="username" className="input__field" type="text" placeholder=" " />
        <span className="input__label">Username</span>
      </label>
      <br />
      <label htmlFor="password" className="input">
        <input name="password" className="input__field" type="text" placeholder=" " />
        <span className="input__label">Password</span>
      </label>
      <div className="button-group">
        <button type="button">Login</button>
        <button type="button">Cancel</button>
      </div>
    </div>

  </Base>
);

export default Login;
