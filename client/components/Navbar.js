import React from 'react'
import  {MenuItems}  from  './MenuItems' ;

function Navbar ()  {
const menuItems = [

  {
    location: 'Pensacola',
    url: '/Pensacola',
  },
  {
    location: 'Austin',
    url: '/Austin',
  },
  {
   location: 'London',
   url: '/London',
  },
  {
   location: 'New York',
   url: '/NewYork',
  },
 ];

 return (
  <nav>
    <label id='dropdown-cities'> Choose A City </label>
   <select className = 'menus' for='dropdown-cities'>
    {menuItems.map((menu, index) =>
    <option className='menu-itmes'>
       <a href={menu.url}>
       {menu.location}
      </a>
    </option>
    )}
   </select>
  </nav>
 );
};

export default Navbar;