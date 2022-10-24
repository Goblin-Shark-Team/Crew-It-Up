import React from 'react'
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
// what is the Schema for dummy data
// what format is it getting to us? ...
// Ask backend to send us this info...


 export function Searchbar  () {

  //const navigate = useNavigate();

  const dummyData = [
    {
      location: 'Brooklyn',
      artist: 'Evan',
      url: 'https://plus.unsplash.com/premium_photo-1661963934962-0b4426a0793f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJvb2tseW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      location: 'Brooklyn',
      artist: 'Alex',
      url: 'https://images.unsplash.com/photo-1565867254334-10280784ff69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvb2tseW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      location: 'Baton Rogue',
      artist: 'Kaju',
      url : "https://images.unsplash.com/photo-1618676673082-c335cf580651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmF0b24lMjByb3VnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1296&q=60"
    },
    {
      location: 'Baton Rogue',
      artist: 'Jen',
    },
  ]

  const [location, setLocation] = useState();
  const [allArtists, setAllArtists] = useState([]);
  //const [allUrls, setAllUrls] = useState([]);

  const handleUserInput = (e) => {
    e.preventDefault();
    console.log('e.target.value', e.target.value);
    setLocation(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('location', location)
    const names = dummyData.map((ele, i) => {
      // return <li key={ele.artist + i}>{ele.arist}</li>
      return <img src={ele.url} alt={ele.location}/>
    })
    console.log(names);
    setAllArtists(names);
    navigate('/London')
  }
  

  return (
    <div className='search-bar'>
      <label form='inp'>
        <input type='text' id='location' placeholder='&nbsp;' onChange={handleUserInput}/>
        <button type="submit" className="btn" onClick={handleSubmit}>Submit</button>
      </label>
      <div>
        {allArtists ? allArtists : null}
      </div>
    </div>
  )
}
