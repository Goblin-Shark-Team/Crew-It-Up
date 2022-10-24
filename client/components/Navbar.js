import React from 'react';
import '../styles/navbar.scss'

function Navbar ()  {
 

 return (
  <nav id='navbar'>
  <div id='logo'>Crew It Up</div>
    <section id='right-nav'>
      <nav className="secondary-text">Feed</nav>
      <nav className="secondary-text">Profile</nav>
      <nav className="secondary-text">Search</nav>
    </section>
  </nav>
 );
};

export default Navbar;