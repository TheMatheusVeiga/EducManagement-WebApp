import React from 'react';
import Menu from './content/Menu';
import './style/index.css';

const Landing = () => (
  <>
    <Menu />
    <div className="container">
      <section id="first">
        <h1>First Section</h1>
      </section>

      <section id="second">
        <h1>Second Section</h1>
      </section>

      <section id="third">
        <h1>Third Section</h1>
      </section>
    </div>
  </>
);
export default Landing;
