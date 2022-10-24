import React, {useState, useRef} from 'react';


export default function Upload(props){
    const[name, setName] = useState('')
    const[userEmail, setUserEmail] = useState('')
    const[city, setCity] = useState('')
    const[bio, setBio] = useState('')
    const[url, setUrl] = useState('')

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
        setUrl('')
    }




// file popup window not showing when i click the button. Can someone else try it on their comp?  Thanks
// also cant type in the input fields.  Gonna hit up help desk for that cuz it seems like everything is correct
return(
<div>
    <h1>CREW IT UP</h1>
    <form id='user-setup' onSubmit={handleSubmit}>
        <div id='name-bar'>Name:
            <input type='text'
            name='name'
            className='name-input'
            form='user-setup'
            value={name}
            onChange={(e) => setName(e.target.value)}
            /> 
        </div>
        <label id='city-dropdown'>
            <span>City:</span>
            <select id='select-city' value={city} onChange={(e) => setCity(e.target.value)} form='user-setup'>
                <option value='Select City'>Select City</option>
                <option value='new york'>New York</option>
                <option value='london'>London</option>
                <option value='los angeles'>Los Angeles</option>
                <option value='austin'>Austin</option>
                <option value='atlanta'>Atlanta</option>
                <option value='chicago'>Chicago</option>
                <option value='new orleans'>New Orleans</option>
            </select>
        </label> 
        <div id='email-bar'>
            <span>Email:</span>
            <input type='email'
            name="email"
            className="email-input"
            form='user-setup'
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            />
        </div>
        <div id='bio-text'>
            <p>Bio</p>
            <input type='text'
            name='bio'
            className='bio-input'
            maxLength='800'
            form='user-setup'
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            />
        </div>
        </form>
       
        <form id='url-submit' onSubmit={handleSubmit}>
        <div id='url-text'>
            <span>Upload URL</span>
            <input type='text'
            className='url-input'
            form='url-submit'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            />
            <button id='url-submit btn' onClick={handleClick} form='url-submit'>Upload Photos</button>
             {/* <button  id='upload-button' onClick={handleClick}> Upload a file </button>  
        <input type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{display:'none'}} 
            /> */}
        </div>
        </form>
        <button type='submit' id='set-user-btn' form='user-setup'>Submit</button>
        
</div>  
)
}

//create url input box
//when hit button clears input box
//keep url as a string
