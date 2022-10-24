import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import '../styles.scss'
import '../styles/gallery.scss'


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
  function handleImageClick(e){
    console.log(e.target.classList[0])
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
        <img onClick={handleImageClick} src={photos[key]['url']} className={photos[key]['user_id']}></img>
      </div>
    ) 
    console.log(photoDiv[0])
   }
   
  return (
    
    <div id='homepage'>
      <Navbar />
        <div id='dropdown'>
          <label id='dropdown-cities'> Select A City </label>
          <select  onChange={handleCityChange}  className='menus' htmlForm='dropdown-cities'>
            <option value='null'>Choose one</option>
            {menuItems.map((menu, index) =>
            <option value={menu.location} className='menu-items'>
              {menu.location}
            </option>
            )}
          </select>
      </div>

      <div id='grid-photos'>
        {photoDiv} 
      </div>
    </div>
  );
}
