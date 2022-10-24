import React from 'react'
import '../styles/navbar.scss'

function Navbar (props)  {
 return (
  <nav id='navbar'>
      <div id='logo'>Crew It Up</div>
      <section id='right-nav'>
        <nav className="secondary-text">Log in</nav>
        <nav className="secondary-text">Sign up</nav>
      </section>
  </nav>
 );
};

export default Navbar;