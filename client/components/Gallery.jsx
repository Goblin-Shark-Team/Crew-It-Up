import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';


export default function Gallery (props) {
  const[ photos, setPhotos ] = useState({}); 
  function handleCityChange (e) {
    fetch(`photos/city/${e.target.value}`)
      .then(data => data.json())
      .then(data => {
        const obj = {};
        data.forEach((e,i) => {
          obj[i] = { user_id: e._id, url: e.url };
        });
        setPhotos(obj);
      })
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
   
   const photoDiv = [];
   for(const key in photos){
    photoDiv.push(
      <div className="photo-div">
        <img src={photos[key]['url']}></img>
      </div>
    )
   }
   
  return (
    
    <div id='homepage'>
      <Navbar />
      <nav>
        <center>
          <label id='dropdown-cities'> Select A City </label>
          <select  onChange={handleCityChange}  className = 'menus' htmlFor='dropdown-cities'>
            <option value='null'> Select A City</option>
            {menuItems.map((menu, index) =>
            <option value={menu.location} className='menu-items'>
              {menu.location}
            </option>
            )}
          </select>
      </center>
      </nav>


      <div id='grid-photos'>
        {photoDiv} 
      </div>
    </div>
  );
}
