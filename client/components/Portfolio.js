import React, { useState, useEffect } from "react";
import '../styles/portfolio.scss'



export default function Portfolio(){
    const[images, setImages] = useState(null);


    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => setImages(data.message))
    },[])
   // <img src="https://www.nomadasaurus.com/wp-content/uploads/2022/02/Koh-Samui-Tours-Day-Trips-Feature.jpg"/>
console.log('stateimage', images)
   
    

 //{images && <img src={images}></img>}
    return (

        <div className="portfolio-main">
      <header className='porfolio-head'><h1>Photographer Name</h1></header>
        <div  className='containerStyles'>
                <img className="dogimages" src={images}/>
        </div>
        <div className='bio'>
            <p className='bio-text'>jahsdfkljahsdjkfhaksjdhflasjdflkasdf</p>
        </div>
        
      </div>



    )





}