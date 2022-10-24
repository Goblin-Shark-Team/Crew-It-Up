import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import '../styles.scss'
import '../styles/gallery.scss'


export default function Gallery () {
  
  function handleCityChange (e) {
    fetch(`photos/city/${e.target.value}`)
      .then(data => data.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  
  const menuItems = [
    {
      location: 'Pensacola',
    },
    {
      location: 'Austin',
    },
    {
     location: 'London',
    },
    {
     location: 'New York',
    },
   ];
   
  return (
    
    <div id='homepage'>
      <Navbar />
        <div id='dropdown'>
          <label id='dropdown-cities'> Select A City </label>
          <select  onChange={handleCityChange}  className='menus' htmlFor='dropdown-cities'>
            <option value='null'>Choose one</option>
            {menuItems.map((menu, index) =>
            <option value={menu.location} className='menu-items'>
              {menu.location}
            </option>
            )}
          </select>
      </div>

      <div id='grid-photos'>
        <div className='homepage-photos'></div>
        <div className='homepage-photos'></div>
        <div className='homepage-photos'></div>
        <div className='homepage-photos'></div>
        <div className='homepage-photos'></div>
        <div className='homepage-photos'></div>
        <div className='homepage-photos'></div>
        <div className='homepage-photos'></div>
        <div className='homepage-photos'></div>
      </div>
    </div>
  );
}
