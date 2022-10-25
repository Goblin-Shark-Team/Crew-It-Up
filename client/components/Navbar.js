
import React from 'react';
import '../styles/navbar.scss'
import { useNavigate } from 'react-router-dom';
function Navbar ()  {
  const navigate = useNavigate();

  function handleLogin(e) {
    navigate(`/login`);
  }

  function handleSignup(e) {
    navigate(`/signup`);
  }

  return (
    <nav id='navbar'>
    <div id='logo'>Crew It Up</div>
      <section id='right-nav'>
        <nav onClick={handleLogin} className="secondary-text">Log in</nav>
        <nav onClick={handleSignup} className="secondary-text">Sign up</nav>
      </section>
    </nav>
  );

};

export default Navbar;