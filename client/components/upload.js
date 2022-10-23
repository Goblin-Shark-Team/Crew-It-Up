import React from 'react';
import leftBtn from '../icons/arrow-left.png'; // png Icon


export default function Upload(props){

    const hiddenFileInput = React.useRef(null)

    const handleClick = e => {
        hiddenFileInput.current.click();
        console.log('clicked')
    }

    const handleChange = e => {
        const fileUpladed = e.target.files[0]
        props.handleFile(fileUploaded)
        
    }





// file popup window not showing when i click the button. Can someone else try it on their comp?  Thanks

return(
<div>
        <h1>CREW IT UP</h1>
         
        
      <button id='upload-button' onClick={handleClick}>
        Upload a file
        <input type="file"
             ref={hiddenFileInput}
             onChange={handleChange}
             style={{display:'none'}} 
      /> 
      </button>
      
    
      </div>  

)

    
}