import React, {useState, useRef} from 'react';
import '../styles/upload.scss'


export default function Upload(props){
    const[name, setName] = useState('')
    const[userEmail, setUserEmail] = useState('')
    const[city, setCity] = useState('')
    const[bio, setBio] = useState('')

    const hiddenFileInput = useRef(null)

    const handleClick = e => {
        hiddenFileInput.current.click();
        console.log('clicked')
    }

    const handleChange = e => {
        
        const fileUpladed = e.target.files[0]
        props.handleFile(fileUploaded)
        
    }

    const handleSubmit = e => {
        e.preventDefault(); 
        console.log('user updated')
    }




// file popup window not showing when i click the button. Can someone else try it on their comp?  Thanks
// also cant type in the input fields.  Gonna hit up help desk for that cuz it seems like everything is correct
return(
<div id='upload-layout'>
    <h1 id='upload-title'>Update your account</h1>
    <form id='user-setup' onSubmit={handleSubmit}>
        <p id='name-bar' className='label-text'>Name<br/></p>
            <input type='text'
            name='name'
            className='input-style'
            value={name}
            onChange={(e) => setName(e.target.value)}
            /> 
        
        {/* <label id='city-dropdown'> */}
            <p className='label-text'>City<br/></p>
            <select id='select-city' value={city} className='input-style' onChange={(e) => setCity(e.target.value)}>
                <option value='Select City'>Select City</option>
                <option value='new york'>New York</option>
                <option value='london'>London</option>
                <option value='los angeles'>Los Angeles</option>
                <option value='austin'>Austin</option>
                <option value='atlanta'>Atlanta</option>
                <option value='chicago'>Chicago</option>
                <option value='new orleans'>New Orleans</option>
            </select>
            <p className='label-text'>Email<br/></p>
            <input type='email'
            name="email"
            className='input-style'
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            />
            <p className='label-text'>Bio</p>
            <input type='text'
            name='bio'
            className='input-style'
            maxLength='800'
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            />
        <button id='upload-button' className='button-style' onClick={handleClick}>Upload a file</button>  
        <input type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{display:'none'}} 
            />
        <button type='submit' className='button-style' id='set-user-btn'>Submit</button>
    </form>
</div>  
)
}