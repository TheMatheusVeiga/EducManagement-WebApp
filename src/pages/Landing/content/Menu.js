import { Link } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';

const Menu = () => (
  <>
    <Navbar>
      <ul>
        <li>
          <a data-scroll href="#first">
            First
          </a>
        </li>
        <li>
          <a data-scroll href="#second">
            Second
          </a>
        </li>
        <li>
          <a data-scroll href="#third">
            Thrid
          </a>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/app/main">App</Link>
        </li>
      </ul>
    </Navbar>
  </>
);

export default Menu;
