import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
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
              <Link to="/app">App</Link>
            </li>
          </ul>
        </Navbar>
      </>
    );
  }
}

export default Menu;
