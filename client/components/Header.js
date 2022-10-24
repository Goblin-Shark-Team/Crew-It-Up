import Navbar from './Navbar';
import React from 'react';

export function Header () {
 return (
  <header>
   <div className = "nav-area">
    <a href = "/" className = "logo">
     Logo
    </a>
    <Navbar />
   </div>
  </header>
 );
};
export default Header;